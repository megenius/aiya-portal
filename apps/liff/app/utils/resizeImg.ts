export async function resizeImage(
  file: File,
  {
    maxSizeMB = 2,
    maxWidth = 1920,
    quality = 0.85,
  }: {
    maxSizeMB?: number;
    maxWidth?: number;
    quality?: number;
  } = {},
): Promise<File> {
  const isAndroidLiff = /Line\//i.test(navigator.userAgent) && /Android/i.test(navigator.userAgent);
  const targetMaxSize = isAndroidLiff ? Math.min(maxSizeMB, 1) : maxSizeMB; // <= 1MB on Android LIFF
  const targetMaxWidth = isAndroidLiff ? Math.min(maxWidth, 1280) : maxWidth;

  try {
    console.log("[resizeImage] start", {
      ua: navigator.userAgent,
      isAndroidLiff,
      input: { name: file.name, type: file.type, size: file.size },
      targetMaxWidth,
      targetMaxSizeMB: targetMaxSize,
      qualityInitial: quality,
    });
  } catch { void 0 }

  const dataURLToBlob = (dataURL: string) => {
    const arr = dataURL.split(",");
    const mimeMatch = arr[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : "image/jpeg";
    const bstr = atob(arr[1] || "");
    const u8arr = new Uint8Array(bstr.length);
    for (let i = 0; i < bstr.length; i++) u8arr[i] = bstr.charCodeAt(i);
    return new Blob([u8arr], { type: mime });
  };

  const drawAndCompress = async (bitmap: ImageBitmap) =>
    new Promise<File>((resolve) => {
      let { width, height } = bitmap;
      if (width > targetMaxWidth) {
        height = Math.round((height * targetMaxWidth) / width);
        width = targetMaxWidth;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.warn("[resizeImage] No canvas context, fallback original");
        return resolve(file);
      }
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(bitmap, 0, 0, width, height);

      const tryExport = (q: number) => {
        canvas.toBlob(
          (blob) => {
            let out = blob;
            if (!out) {
              try {
                const dataURL = canvas.toDataURL("image/jpeg", q);
                out = dataURLToBlob(dataURL);
              } catch (e) {
                console.error("[resizeImage] toBlob null & toDataURL failed", e);
              }
            }
            if (!out) {
              console.warn("[resizeImage] export failed, fallback to original file");
              return resolve(file);
            }
            try {
              console.log("[resizeImage] quality_attempt", { q, size: out.size });
            } catch { void 0 }
            if (out.size > targetMaxSize * 1024 * 1024 && q > 0.4) {
              const nextQ = parseFloat((q - 0.1).toFixed(2));
              try { console.log("[resizeImage] reduce_quality", { from: q, to: nextQ }); } catch { void 0 }
              tryExport(nextQ);
              return;
            }
            const newFile = new File([out], file.name.replace(/\.[^.]+$/, ".jpg"), {
              type: "image/jpeg",
            });
            try {
              console.log("[resizeImage] done", { finalSize: newFile.size, q });
            } catch { void 0 }
            resolve(newFile);
          },
          "image/jpeg",
          q,
        );
      };
      const startQ = isAndroidLiff ? Math.min(quality, 0.8) : quality;
      tryExport(startQ);
    });

  // Path 1: createImageBitmap
  try {
    const bitmap = await createImageBitmap(file).catch(() => null as unknown as ImageBitmap | null);
    if (bitmap) {
      try {
        console.log("[resizeImage] using createImageBitmap", {
          androidLiff: isAndroidLiff,
          targetMaxWidth,
          targetMaxSizeMB: targetMaxSize,
        });
      } catch { void 0 }
      return await drawAndCompress(bitmap);
    }
  } catch (e) {
    console.warn("[resizeImage] createImageBitmap failed, fallback to FileReader");
  }

  // Path 2: FileReader fallback
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = async () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve(file);
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(async (b) => {
          if (!b) return resolve(file);
          const bmp = await createImageBitmap(b).catch(() => null as unknown as ImageBitmap | null);
          if (!bmp) return resolve(file);
          try { console.log("[resizeImage] using FileReader fallback path"); } catch { void 0 }
          const out = await drawAndCompress(bmp);
          resolve(out);
        });
      } catch {
        resolve(file);
      }
    };
    img.onerror = () => {
      console.warn("[resizeImage] image load error, fallback to original file");
      resolve(file);
    };
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      console.warn("[resizeImage] FileReader error, fallback to original file");
      resolve(file);
    };
    reader.readAsDataURL(file);
  });
}
