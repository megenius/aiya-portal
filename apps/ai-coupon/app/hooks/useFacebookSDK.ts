import { useState, useEffect, useCallback } from "react";
import { useNavigate, useFetcher } from "@remix-run/react";
import { fetchExchageToken } from "~/services/facebook";
import { reject } from "lodash";
import { PageInfo } from "~/@types/app";

interface FacebookSDK {
  init(params: {
    appId: string;
    autoLogAppEvents?: boolean;
    xfbml?: boolean;
    version: string;
  }): void;
  AppEvents: {
    logPageView(): void;
  };
  Event: {
    subscribe(event: string, callback: (e: any) => void): void;
  };
  CustomerChat: {
    hide(): void;
    show(shouldShowDialog?: boolean): void;
    update(params: object): void;
  };
  api(
    path: string,
    method?: "get" | "post" | "delete",
    params?: object,
    callback?: (response: any) => void
  ): void;
  login(
    callback: (response: FB.LoginStatusResponse) => void,
    options?: FB.LoginOptions
  ): void;
  logout(callback: (response: object) => void): void;
  getLoginStatus(
    callback: (response: FB.LoginStatusResponse) => void,
    force?: boolean
  ): void;
}

declare global {
  interface Window {
    FB?: FacebookSDK;
    fbAsyncInit?: () => void;
  }
}

export namespace FB {
  export interface LoginStatusResponse {
    status: "connected" | "not_authorized" | "unknown";
    authResponse: AuthResponse | null;
  }

  export interface AuthResponse {
    code: string;
    accessToken: string;
    userID: string;
    expiresIn: number;
    // signedRequest: string;
    // graphDomain: string;
    // data_access_expiration_time: number;
  }

  export interface LoginOptions {
    scope?: string;
    return_scopes?: boolean;
    enable_profile_selector?: boolean;
    profile_selector_ids?: string;
    config_id?: string;
    response_type?: string;
    override_default_response_type?: boolean;
  }
}

interface UseFacebookSDKOptions {
  appId: string;
  autoLogAppEvents?: boolean;
  xfbml?: boolean;
  version?: string;
}

export function useFacebookSDK({
  appId,
  autoLogAppEvents = true,
  xfbml = true,
  version = "v20.0",
}: UseFacebookSDKOptions) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loginStatus, setLoginStatus] = useState<FB.LoginStatusResponse | null>(
    null
  );
  const navigate = useNavigate();
  const fetcher = useFetcher();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadSDK = () => {
      const script = document.createElement("script");
      script.src = `https://connect.facebook.net/en_US/sdk.js`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    if (!window.FB) {
      loadSDK();
    }

    window.fbAsyncInit = () => {
      window.FB?.init({
        appId,
        autoLogAppEvents,
        xfbml,
        version,
      });

      console.log("Facebook SDK initialized", appId, version);

      setIsInitialized(true);

      window.FB?.AppEvents.logPageView();

      window.FB?.getLoginStatus((response) => {
        setLoginStatus(response);
      });
    };
  }, [appId, autoLogAppEvents, xfbml, version]);

  
  const login = useCallback(
    (options?: FB.LoginOptions) => {
      return new Promise<FB.LoginStatusResponse>((resolve, reject) => {
        if (typeof window === "undefined" || !window.FB) {
          reject(new Error("Facebook SDK not initialized"));
          return;
        }

        window.FB?.login((response) => {
          console.log("Login response:", response);

          if (response.status === "connected") {
            setLoginStatus(response);

            console.log("Auth response:", response.authResponse);

            if (response.authResponse) {
              const { code, accessToken } = response.authResponse;
              fetchExchageToken({
                code,
                shortLivedToken: accessToken,
              }).then((data) => {
                console.log("Long-lived token received:", data);
                const authResponse = {
                  ...response.authResponse,
                  ...data,
                } as any;
                setAccessToken(authResponse.accessToken);
                resolve({ ...response, authResponse });
              });
            }
          } else {
            reject(new Error("Facebook login failed"));
          }
        }, options);

        // window.FB.getLoginStatus((response) => {
        //   console.log("Login status:", response);
        //   if (response.status === "connected") {
        //     setLoginStatus(response);
        //     resolve(response);
        //   } else {
        //     window.FB?.login((response) => {
        //       console.log("Login response:", response);

        //       if (response.status === "connected") {
        //         setLoginStatus(response);

        //         console.log("Auth response:", response.authResponse);

        //         if (response.authResponse) {
        //           const { code, accessToken } = response.authResponse;
        //           fetchExchageToken({
        //             code,
        //             shortLivedToken: accessToken,
        //           }).then((data) => {
        //             console.log("Long-lived token received:", data);
        //             const authResponse = {
        //               ...response.authResponse,
        //               ...data,
        //             } as any;
        //             setAccessToken(authResponse.accessToken);
        //             resolve({ ...response, authResponse });
        //           });
        //         }
        //       } else {
        //         reject(new Error("Facebook login failed"));
        //       }
        //     }, options);
        //   }
        // });
      });
    },
    [fetcher]
  );

  const logout = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      if (typeof window === "undefined" || !window.FB) {
        reject(new Error("Facebook SDK not initialized"));
        return;
      }

      window.FB.logout(() => {
        setLoginStatus(null);
        // fetcher.submit({}, { method: "post", action: "/api/facebook-logout" });
        resolve();
      });
    });
  }, [fetcher]);

  const getUserData = useCallback(() => {
    return new Promise<any>((resolve, reject) => {
      if (typeof window === "undefined" || !window.FB) {
        reject(new Error("Facebook SDK not initialized"));
        return;
      }

      window.FB.api(
        "/me",
        "get",
        { fields: "id,name,email,picture.width(480).height(480)" },
        (response) => {
          if (response && !response.error) {
            resolve({
              ...response,
              picture: response.picture?.data?.url,
            });
          } else {
            reject(new Error("Failed to fetch user data"));
          }
        }
      );
    });
  }, []);

  const setupChat = useCallback(
    (props: { msg?: string; delay?: number; ref?: string } = {}) => {
      if (typeof window !== "undefined" && window.FB?.CustomerChat) {
        window.FB.CustomerChat.hide();
        setTimeout(() => {
          window.FB?.CustomerChat.update({
            logged_in_greeting: props.msg,
            logged_out_greeting: props.msg,
            ref: props.ref,
          });
          window.FB?.CustomerChat.show(true);
        }, props.delay || 5000);
      }
    },
    []
  );

  const hideChat = useCallback(() => {
    if (typeof window !== "undefined" && window.FB?.CustomerChat) {
      window.FB.CustomerChat.hide();
    }
  }, []);

  const getPages = useCallback((accessToken) => {
    return new Promise<PageInfo[]>((resolve, reject) => {
      if (!accessToken) reject(new Error("User access token not found"));

      if (typeof window === "undefined" || !window.FB) {
        reject(new Error("Facebook SDK not initialized"));
        return;
      }

      const url = `/me/accounts?fields=name,access_token,id,category,picture.width(480).height(480),connected_instagram_account&limit=100&access_token=${accessToken}`;
      console.log("Fetching pages:", url);

      window.FB?.api(url, "get", (res: any) => {
        console.log(res);

        const pages = res.data.map((p) => {
          return {
            id: p.id,
            name: p.name,
            accessToken: p.access_token,
            category: p.category,
            pictureUrl: p.picture.data.url,
            ig: p.connected_instagram_account?.id,
          };
        });
        resolve(pages);
      });
    });
  }, []);

  const getAdAccounts = useCallback((accessToken) => {
    return new Promise<
      Array<{
        id: string;
        name: string;
        business: string;
        account_status: string;
        disable_reason: string;
        created_time: string;
        currency: string;
        timezone_name: string;
        timezone_offset_hours_utc: number;
        customconversions: any[];
      }>
    >((resolve, reject) => {
      if (!accessToken) reject(new Error("User access token not found"));

      if (typeof window === "undefined" || !window.FB) {
        reject(new Error("Facebook SDK not initialized"));
        return;
      }

      const fields = [
        "name",
        // "business",
        // "business_name",
        "id",
        "account_status",
        "disable_reason",
        "created_time",
        "currency",
        "timezone_name",
        "timezone_offset_hours_utc",
        "customconversions",
      ];
      const url = `/me/adaccounts?limit=100&fields=${fields.join(",")}&access_token=${accessToken}`;
      console.log("Fetching ad accounts:", url);

      window.FB?.api(url, "get", (res: any) => {
        console.log(res);
        const pages = res.data.map((p) => {
          return {
            id: p.id,
            name: p.name,
            // business_name: p.business_name,
            // business: p.business,
            account_status: p.account_status,
            disable_reason: p.disable_reason,
            created_time: p.created_time,
            currency: p.currency,
            timezone_name: p.timezone_name,
            timezone_offset_hours_utc: p.timezone_offset_hours_utc,
            customconversions: p.customconversions,
          };
        });
        resolve(pages);
      });
    });
  }, []);

  return {
    isInitialized,
    loginStatus,
    login,
    logout,
    getUserData,
    setupChat,
    hideChat,
    accessToken,
    getPages,
    getAdAccounts,
  };
}
