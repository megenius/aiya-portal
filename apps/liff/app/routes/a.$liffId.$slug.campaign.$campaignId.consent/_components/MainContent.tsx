/* eslint-disable react/prop-types */

interface MainContentProps {
  lang: string;
  handleSubmit: (e: React.FormEvent) => void;
  hasAgreed: boolean;
  setHasAgreed: (value: boolean) => void;
  isPending: boolean;
  primaryColor: string;
}

const MainContent: React.FC<MainContentProps> = ({
  lang,
  handleSubmit,
  hasAgreed,
  setHasAgreed,
  isPending,
  primaryColor,
}) => {
  const pdpaContent = {
    th: {
      title: "ข้อกำหนดและเงื่อนไขการใช้บริการมีจีเนียส",
      subtitle: "กรุณาอ่านและยอมรับเงื่อนไขก่อนเข้าร่วมแคมเปญ",
      content: `1. บทนำ

บริษัท มีจีเนียส จำกัด (“มีจีเนียส”) ตระหนักถึงความสำคัญของข้อมูลส่วนบุคคลและข้อมูลอื่นของท่าน (“ข้อมูล”) เพื่อให้ท่านเชื่อมั่นได้ว่า มีจีเนียสมีความโปร่งใสและรับผิดชอบในการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลของท่านตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (“กฎหมายคุ้มครองข้อมูลส่วนบุคคล”) และกฎหมายที่เกี่ยวข้อง นโยบายการคุ้มครองข้อมูลส่วนบุคคล (“นโยบาย”) ฉบับนี้จัดทำขึ้นเพื่อชี้แจงรายละเอียดเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผย (“ประมวลผล”) ข้อมูลส่วนบุคคลโดยมีจีเนียส รวมถึงเจ้าหน้าที่และบุคคลที่เกี่ยวข้องผู้ดำเนินการแทนหรือในนามของมีจีเนียส

2. ขอบเขตการบังคับใช้นโยบาย

นโยบายนี้ใช้กับข้อมูลส่วนบุคคลของบุคคลที่มีความสัมพันธ์กับมีจีเนียสในปัจจุบันและอนาคต ซึ่งถูกประมวลผลโดยมีจีเนียส พนักงาน ลูกจ้าง ผู้รับจ้างตามสัญญา และรวมถึงคู่สัญญาหรือบุคคลภายนอกที่ประมวลผลข้อมูลแทนหรือในนามของมีจีเนียส (“ผู้ประมวลผลข้อมูลส่วนบุคคล”) ภายใต้บริการต่างๆ เช่น เว็บไซต์ ระบบ แอปพลิเคชัน เอกสาร หรือบริการอื่นที่มีจีเนียสดูแล (“บริการ”)

บุคคลที่อยู่ในขอบเขต ได้แก่
	1.	ลูกค้าบุคคลธรรมดา
	2.	พนักงานหรือลูกจ้าง
	3.	คู่ค้าและผู้ให้บริการซึ่งเป็นบุคคลธรรมดา
	4.	กรรมการ ผู้รับมอบอำนาจ ผู้แทน ตัวแทน ผู้ถือหุ้น ลูกจ้าง หรือบุคคลในรูปแบบเดียวกันของนิติบุคคลที่มีความสัมพันธ์กับมีจีเนียส
	5.	ผู้ใช้งานผลิตภัณฑ์หรือบริการของมีจีเนียส
	6.	ผู้เข้าชมหรือใช้งานเว็บไซต์ https://web.aiya.ai/ รวมทั้งระบบ แอปพลิเคชัน อุปกรณ์ หรือช่องทางสื่อสารอื่นที่มีจีเนียสดูแล
	7.	บุคคลอื่นที่มีจีเนียสเก็บรวบรวมข้อมูลส่วนบุคคล (เช่น ผู้สมัครงาน ครอบครัวของพนักงาน ผู้ค้ำประกัน ผู้รับประโยชน์ในกรมธรรม์ ฯลฯ)

ข้อ 1)–6) เรียกรวมว่า “ท่าน”

นอกจากนโยบายฉบับนี้ อาจมี “ประกาศเกี่ยวกับความเป็นส่วนตัว” (“ประกาศ”) สำหรับผลิตภัณฑ์หรือบริการเฉพาะ เพื่อชี้แจงรายละเอียดการประมวลผล ระยะเวลาเก็บรักษา และสิทธิของเจ้าของข้อมูล หากมีความขัดแย้งระหว่าง “ประกาศ” กับ “นโยบาย” ให้ยึดตาม “ประกาศ” ของบริการนั้น

3. คำนิยาม
	•	มีจีเนียส: บริษัท มีจีเนียส จำกัด
	•	ข้อมูลส่วนบุคคล: ข้อมูลเกี่ยวกับบุคคลธรรมดาซึ่งทำให้สามารถระบุตัวบุคคลได้ ไม่ว่าทางตรงหรืออ้อม (ไม่รวมข้อมูลผู้ถึงแก่กรรมโดยเฉพาะ)
	•	ข้อมูลส่วนบุคคลอ่อนไหว: ตามมาตรา 26 พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 เช่น เชื้อชาติ ศาสนา ความเห็นทางการเมือง พฤติกรรมทางเพศ ประวัติอาชญากรรม สุขภาพ ความพิการ สหภาพแรงงาน พันธุกรรม ชีวภาพ หรือข้อมูลอื่นที่กระทบต่อเจ้าของข้อมูลในทำนองเดียวกัน
	•	การประมวลผลข้อมูลส่วนบุคคล: การดำเนินการใดๆ กับข้อมูลส่วนบุคคล เช่น เก็บรวบรวม บันทึก จัดระเบียบ เก็บรักษา ปรับปรุง ใช้ เปิดเผย โอน ลบทำลาย ฯลฯ
	•	เจ้าของข้อมูลส่วนบุคคล: บุคคลธรรมดาซึ่งเป็นเจ้าของข้อมูลที่มีจีเนียสเก็บรวบรวม ใช้ หรือเปิดเผย
	•	ผู้ควบคุมข้อมูลส่วนบุคคล: บุคคล/นิติบุคคลที่มีอำนาจตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล
	•	ผู้ประมวลผลข้อมูลส่วนบุคคล: บุคคล/นิติบุคคลที่ดำเนินการเกี่ยวกับข้อมูลส่วนบุคคลตามคำสั่งหรือนามของผู้ควบคุมข้อมูล (ไม่เป็นผู้ควบคุมข้อมูล)

4. แหล่งที่มาของข้อมูลส่วนบุคคลที่มีจีเนียสเก็บรวบรวม
	•	เก็บจากเจ้าของข้อมูลโดยตรง ผ่านช่องทางบริการต่างๆ (สมัคร ลงทะเบียน สมัครงาน ทำสัญญา เอกสาร แบบสำรวจ ใช้งานบริการ หรือติดต่อสื่อสารที่สำนักงานหรือช่องทางที่มีจีเนียสดูแล)
	•	เก็บจากการใช้งานเว็บไซต์/ผลิตภัณฑ์/บริการ (เช่น ติดตามพฤติกรรมด้วยคุกกี้หรือซอฟต์แวร์บนอุปกรณ์)
	•	เก็บจากแหล่งอื่นที่มีอำนาจ/เหตุผลทางกฎหมาย หรือได้รับความยินยอมแล้ว (เช่น เชื่อมโยงบริการดิจิทัลของหน่วยงานภาครัฐ/เอกชน หรือแลกเปลี่ยนข้อมูลเพื่อให้บริการตามสัญญา)

หากท่านให้ข้อมูลของบุคคลอื่นกับมีจีเนียส ท่านต้องแจ้งรายละเอียดตามนโยบาย/ประกาศให้บุคคลนั้นทราบและขอความยินยอมเมื่อจำเป็น

หากปฏิเสธไม่ให้ข้อมูลที่จำเป็น อาจทำให้มีจีเนียสไม่สามารถให้บริการได้ทั้งหมดหรือบางส่วน

5. ฐานกฎหมายในการเก็บรวบรวมข้อมูลส่วนบุคคล

มีจีเนียสกำหนดฐานกฎหมายตามความเหมาะสมของบริบทบริการ ได้แก่
	•	เพื่อการปฏิบัติหน้าที่ตามกฎหมาย (เช่น เก็บข้อมูลจราจรคอมพิวเตอร์ กฎหมายภาษี การปฏิบัติตามคำสั่งศาล)
	•	ประโยชน์โดยชอบด้วยกฎหมาย ของมีจีเนียสหรือบุคคลอื่น (เช่น ความปลอดภัยอาคาร กิจการภายใน)
	•	เพื่อป้องกัน/ระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพ
	•	เพื่อการปฏิบัติตามสัญญา หรือการเข้าทำสัญญากับท่าน
	•	ความยินยอมของท่าน (เช่น เก็บข้อมูลอ่อนไหวในกรณีที่ไม่เข้าเงื่อนไขยกเว้น หรือนำเสนอผลิตภัณฑ์/บริการของคู่สัญญา/พันธมิตร)

หากจำเป็นต้องเก็บข้อมูลเพื่อกฎหมาย/สัญญา/การเข้าทำสัญญา แล้วท่านปฏิเสธหรือคัดค้าน อาจทำให้ไม่สามารถให้บริการได้ทั้งหมดหรือบางส่วน

6. ประเภทของข้อมูลส่วนบุคคลที่เก็บรวบรวม

ขึ้นอยู่กับบริการและบริบทความสัมพันธ์ ตัวอย่างประเภทข้อมูล (ยกตัวอย่างสำคัญ):
	•	ข้อมูลเฉพาะตัว (ชื่อ-สกุล เลขบัตรประชาชน หนังสือเดินทาง เลขผู้ประกันตน ฯลฯ)
	•	คุณลักษณะบุคคล (วันเกิด เพศ รูปถ่าย พฤติกรรม ความชื่นชอบ ฯลฯ)
	•	ข้อมูลติดต่อ (เบอร์โทร อีเมล ที่อยู่ LINE ID MS Teams ฯลฯ)
	•	ข้อมูลการทำงาน/การศึกษา (ตำแหน่ง ผลงาน เงินเดือน เลขบัญชีธนาคาร วุฒิการศึกษา ฯลฯ)
	•	ข้อมูลกรมธรรม์ประกันภัย (ผู้เอาประกัน ผู้รับประโยชน์ ประเภท/เลขกรมธรรม์ การเคลม ฯลฯ)
	•	ความสัมพันธ์ทางสังคม (สถานภาพทางการเมือง การดำรงตำแหน่ง ความสัมพันธ์กับพนักงาน/ผู้มีส่วนได้เสีย ฯลฯ)
	•	การใช้บริการของมีจีเนียส (บัญชีผู้ใช้ รหัสผ่าน PIN SSO ID OTP ข้อมูลจราจรคอมพิวเตอร์ พิกัด ภาพ/วิดีโอ/เสียง พฤติกรรมการใช้งาน ประวัติการสืบค้น คุกกี้ อุปกรณ์/เบราว์เซอร์ ภาษา ระบบปฏิบัติการ ฯลฯ)
	•	ข้อมูลอ่อนไหว (เชื้อชาติ ศาสนา ความพิการ ความเห็นทางการเมือง ประวัติอาชญากรรม ชีวภาพ ภาพจำลองใบหน้า สุขภาพ ฯลฯ)

7. คุกกี้

มีจีเนียสใช้คุกกี้และเทคโนโลยีคล้ายกันบนเว็บไซต์ภายใต้การดูแล (เช่น https://web.aiya.ai/) หรือบนอุปกรณ์ของท่าน เพื่อความปลอดภัย ความสะดวก และประสบการณ์ใช้งานที่ดี รวมถึงปรับปรุงเว็บไซต์ให้ตรงกับความต้องการ ท่านสามารถตั้งค่าหรือลบคุกกี้ได้จากการตั้งค่าเบราว์เซอร์ของท่าน

8. ข้อมูลผู้เยาว์ คนไร้ความสามารถ และคนเสมือนไร้ความสามารถ

หากจำเป็นต้องได้รับความยินยอมในการเก็บรวบรวมข้อมูลของผู้เยาว์/คนไร้ความสามารถ/คนเสมือนไร้ความสามารถ มีจีเนียสจะเก็บเมื่อได้รับความยินยอมจากผู้ใช้อำนาจปกครอง/ผู้อนุบาล/ผู้พิทักษ์ตามกฎหมาย หากภายหลังพบว่าเก็บโดยยังไม่ได้รับความยินยอมและไม่มีเหตุอันชอบด้วยกฎหมายอื่น จะลบ/ทำลายโดยเร็ว

9. วัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล

(ย่อสาระสำคัญ) เพื่อให้และบริหารจัดการบริการ/ธุรกรรม ควบคุมและติดตามการใช้บริการ เก็บรักษาและปรับปรุงข้อมูล จัดทำบันทึกรายการประมวลผล วิเคราะห์/แก้ปัญหาบริการ กระบวนการภายในองค์กร (สรรหา/ประเมิน) ป้องกัน/ตรวจจับการฉ้อโกง/การกระทำผิด ยืนยันตัวตน ปรับปรุงคุณภาพบริการ ประเมิน/บริหารความเสี่ยง การสื่อสารแจ้งเตือน/ยืนยันคำสั่ง จัดทำและส่งมอบเอกสาร ป้องกันสแปม/การเข้าถึงที่ไม่ได้รับอนุญาต ตรวจสอบพฤติกรรมการใช้บริการเพื่อการค้นคว้าและวิเคราะห์ ปฏิบัติตามหน้าที่ต่อหน่วยงานรัฐ/ภาษี/กฎหมาย ประโยชน์โดยชอบด้วยกฎหมาย ป้องกันอันตรายต่อชีวิต/สุขภาพ จัดทำเอกสารทางประวัติศาสตร์/สถิติ/การค้นคว้า ปฏิบัติตามกฎหมาย/คำสั่งศาล/หมายศาล และการใช้สิทธิเกี่ยวกับข้อมูล

10. ประเภทบุคคลที่มีจีเนียสเปิดเผยข้อมูลส่วนบุคคลของท่าน

เช่น หน่วยงานของรัฐ/ผู้มีอำนาจ คณะกรรมการที่เกี่ยวข้อง คู่สัญญาด้านสวัสดิการพนักงาน พันธมิตรทางธุรกิจ ผู้ให้บริการ (จัดเก็บข้อมูล คลาวด์ พัฒนา/ดูแลระบบ ชำระเงิน อินเทอร์เน็ต โทรศัพท์ Digital ID โลจิสติกส์ ฯลฯ) ผู้รับข้อมูลประเภทอื่น (ผู้ติดต่อ ครอบครัว มูลนิธิ วัด โรงพยาบาล สถานศึกษา ฯลฯ) และการเปิดเผยต่อสาธารณะเมื่อจำเป็น

11. การส่งหรือโอนข้อมูลส่วนบุคคลไปยังต่างประเทศ

อาจจำเป็นต้องส่ง/โอนข้อมูลไปยังต่างประเทศ (เช่น คลาวด์/เซิร์ฟเวอร์ตั้งต่างประเทศ: สิงคโปร์/สหรัฐฯ ฯลฯ) เพื่อการให้บริการ ทั้งนี้ขณะจัดทำนโยบาย ยังไม่มีประกาศรายชื่อประเทศที่มีมาตรฐานเพียงพอ ดังนั้นหากจำเป็นต้องโอน จะดำเนินมาตรการคุ้มครองตามมาตรฐานสากลหรือเงื่อนไขตามกฎหมาย เช่น ปฏิบัติตามกฎหมาย แจ้งและรับความยินยอมเมื่อประเทศปลายทางไม่มีมาตรฐานเพียงพอ ปฏิบัติตาม/เพื่อสัญญา เพื่อป้องกันอันตรายต่อชีวิต/สุขภาพเมื่อไม่อาจให้ความยินยอม และเพื่อภารกิจประโยชน์สาธารณะที่สำคัญ

12. ระยะเวลาในการเก็บรวบรวมข้อมูลส่วนบุคคลของท่าน

เก็บรักษาเท่าที่จำเป็นตามวัตถุประสงค์ ตามนโยบาย/ประกาศ/กฎหมาย หรือเพื่อประโยชน์โดยชอบธรรม (เช่น พิสูจน์การให้บริการ เก็บตามอายุความคดีแพ่ง 10 ปี หรือคดีอาญา เป็นต้น) และจำกัดเฉพาะข้อมูลที่จำเป็น เมื่อพ้นความจำเป็นจะลบ/ทำลาย หรือทำให้ไม่ระบุตัวตน ตามมาตรฐานที่กฎหมาย/คณะกรรมการกำหนด หากมีข้อพิพาท/การใช้สิทธิ/คดีความ อาจเก็บต่อจนกว่าจะถึงที่สุด

13. การให้บริการโดยบุคคลที่สามหรือผู้ให้บริการช่วง

มีจีเนียสอาจมอบหมายบุคคลที่สาม (ผู้ประมวลผล) ให้ประมวลผลข้อมูลแทน/ในนาม เช่น โฮสติ้ง เอาต์ซอร์ส คลาวด์ หรือจ้างทำของ โดยจะมีข้อตกลงกำหนดสิทธิ หน้าที่ ประเภทข้อมูล วัตถุประสงค์ ขอบเขต และคำสั่งที่ต้องปฏิบัติตาม หากมีผู้ให้บริการช่วง จะกำกับให้ทำข้อตกลงมาตรฐานไม่ต่ำกว่าข้อตกลงหลัก

14. วิธีการขอลบข้อมูลส่วนบุคคล

ขอลบข้อมูลได้ทางอีเมล dpo@aiya.ai โดยระบุ:
	1.	ชื่อ-นามสกุล
	2.	ข้อมูลที่ต้องการให้ลบ (เช่น ลบทั้งหมดที่เกี่ยวข้องกับท่าน)
	3.	เหตุผลในการขอลบ (ถ้ามี)
มีจีเนียสจะตรวจสอบและลบภายในไม่เกิน 30 วันนับจากวันที่ได้รับคำร้อง (กรณีข้อมูลจำนวนมาก จะแจ้งกรอบเวลาให้ทราบภายใน 30 วัน) การลบเป็นไปตามมาตรฐานและกฎหมาย หากข้อมูลยังจำเป็นหรือยังมีสิทธิ์เก็บตามกฎหมายเพื่อพิสูจน์สิทธิ/ป้องกันข้อพิพาท มีจีเนียสสงวนสิทธิ์ในการเก็บรักษาไว้จนกว่าจะไม่มีความจำเป็น โปรดทราบว่าการลบบางประเภทอาจกระทบความสะดวกในการใช้บริการ สอบถามได้ที่อีเมลข้างต้น

15. การรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล

มีมาตรการจำกัดสิทธิ์การเข้าถึงเฉพาะผู้มีหน้าที่จำเป็น ต้องปฏิบัติตามมาตรการปกป้องและรักษาความลับอย่างเคร่งครัด ใช้มาตรการความปลอดภัยเชิงองค์กรและเทคนิคตามมาตรฐานสากลและข้อกำหนดของคณะกรรมการฯ เมื่อส่ง/โอน/เปิดเผยแก่บุคคลที่สาม จะกำหนดมาตรการรักษาความปลอดภัยและความลับตามกฎหมาย

16. เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล

มีจีเนียสแต่งตั้ง DPO เพื่อกำกับ/ให้คำแนะนำ/ตรวจสอบการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูล รวมถึงประสานงานกับสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลให้สอดคล้องตามกฎหมาย

17. สิทธิของท่านตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562

มีจีเนียสได้แต่งตั้ง DPO เพื่อกำกับและประสานงานตามกฎหมายดังกล่าว (สิทธิของท่านให้ยึดตามที่กฎหมายกำหนด)

18. โทษของการไม่ปฏิบัติตามนโยบายการคุ้มครองข้อมูลส่วนบุคคล

การไม่ปฏิบัติตามอาจเป็นความผิดและถูกลงโทษทางวินัยตามกฎเกณฑ์ของมีจีเนียส (กรณีพนักงาน/ลูกจ้าง) หรือข้อตกลงการประมวลผลข้อมูลส่วนบุคคล (กรณีผู้ประมวลผล) และอาจได้รับโทษตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 รวมทั้งกฎหมายลำดับรองที่เกี่ยวข้อง

19. การร้องเรียนต่อหน่วยงานผู้มีอำนาจกำกับดูแล

หากพบว่ามีจีเนียสไม่ปฏิบัติตามกฎหมาย ท่านมีสิทธิร้องเรียนต่อคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลหรือหน่วยงานที่ได้รับแต่งตั้ง อย่างไรก็ดี ขอความร่วมมือติดต่อมีจีเนียสก่อนเพื่อให้ชี้แจงและแก้ไขในโอกาสแรก

20. การปรับปรุงแก้ไขนโยบายการคุ้มครองข้อมูลส่วนบุคคล

มีจีเนียสอาจปรับปรุง/แก้ไข/เปลี่ยนแปลงนโยบาย และจะแจ้งผ่านเว็บไซต์ https://web.aiya.ai/ โดยมีวันที่มีผลบังคับใช้กำกับ แนะนำให้ตรวจสอบนโยบายฉบับใหม่สม่ำเสมอ การใช้งานบริการภายหลังการบังคับใช้นโยบายใหม่ถือเป็นการยอมรับ หากไม่เห็นด้วย โปรดหยุดใช้งานและติดต่อมีจีเนียสเพื่อชี้แจง

21. การติดต่อ

ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)
	•	ชื่อ: บริษัท มีจีเนียส จำกัด
	•	ที่อยู่ติดต่อ: เลขที่ 304 อาคารวานิชเพลส อารีย์ ชั้น 21 ยูนิต 2105 ถ.พหลโยธิน สามเสนใน พญาไท กทม 10400
	•	ช่องทางการติดต่อ: dpo@aiya.ai

เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (Data Protection Officer: DPO)
	•	ชื่อ: นายพิสิษฐ์ วงศ์เมืองแสน
	•	ที่อยู่ติดต่อ: เลขที่ 304 อาคารวานิชเพลส อารีย์ ชั้น 21 ยูนิต 2105 ถ.พหลโยธิน สามเสนใน พญาไท กทม 10400
	•	ช่องทางการติดต่อ: dpo@aiya.ai`,
      agreeText: "ข้าพเจ้ายอมรับเงื่อนไขการใช้ข้อมูลส่วนบุคคล",
      continueButton: "ยอมรับ",
    },
    en: {
      title: "Personal Data Protection Agreement",
      subtitle: "Please read and accept the terms before joining the campaign",
      content: `1. Introduction

MeGenius Co., Ltd. ("MeGenius") recognizes the importance of your personal data and other information ("Data"). We are committed to transparency and accountability in collecting, using, or disclosing your Data in compliance with the Personal Data Protection Act B.E. 2562 (2019) ("PDPA") and other applicable laws. This Personal Data Protection Policy ("Policy") explains how MeGenius, including our personnel and relevant parties acting on behalf of or in the name of MeGenius, collect, use, or disclose ("Process") personal data.

2. Scope

This Policy applies to personal data of individuals who have a relationship with MeGenius, at present or in the future, and whose data are processed by MeGenius, our employees, contractors, and third parties who process data on our behalf ("Processors") under services such as websites, systems, applications, documents, and any other services managed by MeGenius ("Services").

Covered persons include:
  1. Individual customers
  2. Employees and staff
  3. Partners and service providers who are natural persons
  4. Directors, authorized persons, representatives, agents, shareholders, employees, or similar persons of juristic persons that have a relationship with MeGenius
  5. Users of MeGenius products or Services
  6. Visitors/users of https://web.aiya.ai/ and other channels, systems, applications, devices, or communications managed by MeGenius
  7. Other persons whose personal data MeGenius collects (e.g., job applicants, family members of employees, guarantors, beneficiaries, etc.)

Items (1)–(6) are collectively referred to as "you".

In addition to this Policy, there may be a Privacy Notice ("Notice") for specific products or Services to clarify details about processing, retention, and your rights. If any inconsistency arises between a Notice and this Policy, the Notice for that Service will prevail.

3. Definitions
  • MeGenius: MeGenius Co., Ltd.
  • Personal Data: Information relating to an identifiable natural person, directly or indirectly (excluding data of the deceased specifically).
  • Sensitive Data: As defined under Section 26 of the PDPA, e.g., race, religion, political opinions, sexual behavior, criminal records, health, disability, trade union information, genetic and biometric data, or other data of a similar sensitive nature.
  • Processing: Any operation performed on personal data, e.g., collection, recording, organization, storage, adaptation, use, disclosure, transfer, deletion, destruction, etc.
  • Data Subject: A natural person who is the owner of personal data collected, used, or disclosed by MeGenius.
  • Data Controller: A person/juristic person with the authority to make decisions regarding the collection, use, or disclosure of personal data.
  • Data Processor: A person/juristic person who processes personal data on behalf of the Data Controller, without being the Controller.

4. Sources of Personal Data
  • Directly from you via our Services (e.g., registration, applications, contracts, documentation, surveys, using Services, or communications at our office or any managed channel).
  • From your use of our websites/products/Services (e.g., monitoring behavior via cookies or software on devices).
  • From other lawful sources or with your consent when required (e.g., linking to digital services of governmental/private entities or data exchange to fulfill Services).

If you provide personal data of others to MeGenius, you must inform them of this Policy/Notice and obtain consent where required.

If you refuse to provide necessary data, MeGenius may be unable to provide all or part of the Services.

5. Legal Bases

MeGenius relies on appropriate legal bases depending on context, including:
  • Compliance with law (e.g., computer traffic data, tax laws, court orders)
  • Legitimate interests of MeGenius or third parties (e.g., building security, internal operations)
  • Vital interests to prevent or suppress danger to life, body, or health
  • Performance of a contract or entering into a contract with you
  • Your consent (e.g., processing sensitive data where no exception applies, or offering products/services of partners)

If data are required by law/contract/contract entry and you refuse or object, we may be unable to provide all or part of the Services.

6. Types of Personal Data Collected

Depending on the Service and relationship, examples include:
  • Identifiers (name, surname, ID number, passport, social security, etc.)
  • Personal attributes (date of birth, gender, photo, behavior, preferences, etc.)
  • Contact details (phone, email, address, LINE ID, MS Teams, etc.)
  • Employment/education data (position, work history, salary, bank account, education, etc.)
  • Insurance-related data (policyholder, beneficiary, policy type/number, claims, etc.)
  • Social relationships (politically exposed person status, positions held, relationships with employees/stakeholders, etc.)
  • Service usage data (account, password, PIN, SSO ID, OTP, traffic data, location, images/video/audio, usage behavior, browsing history, cookies, device/browser, language, OS, etc.)
  • Sensitive Data (race, religion, disability, political opinions, criminal records, biometric data, facial templates, health, etc.)

7. Cookies

MeGenius uses cookies and similar technologies on websites under our management (e.g., https://web.aiya.ai/) or on your device to support security, convenience, and a better user experience, including tailoring content. You can configure or delete cookies via your browser settings.

8. Minors and Incompetent Persons

Where consent is required to collect data of minors/incompetent persons/quasi-incompetent persons, MeGenius will obtain consent from the lawful guardian/curator. If later found otherwise without another lawful basis, we will delete/destroy the data promptly.

9. Purposes of Processing

(Summary) To provide and manage Services/transactions; control/monitor usage; maintain and improve data; maintain processing records; analyze and troubleshoot Services; internal processes (recruitment/evaluation); prevent/detect fraud or wrongdoing; identity verification; improve Service quality; risk assessment/management; communications/alerts/confirmations; prepare and deliver documents; prevent spam/unauthorized access; behavioral research and analytics; comply with governmental/tax/legal obligations; legitimate interests; protect life/health; historical/statistical/research purposes; comply with court orders; and exercise legal rights.

10. Categories of Recipients

For example, government/regulatory bodies, relevant committees, welfare partners, business partners, service providers (hosting, cloud, system development/maintenance, payments, internet/telecom, Digital ID, logistics, etc.), other recipients (contacts, family, foundations, temples, hospitals, schools, etc.), and public disclosures when necessary.

11. Cross-Border Transfers

Your data may be transferred to other countries (e.g., cloud/servers in Singapore/USA, etc.) to provide Services. As of the date hereof, the list of adequate countries has not been announced. Where required, we will implement safeguards per international standards or legal conditions (e.g., compliance with law, consent where the destination is not adequate, contractual necessity, vital interests, and tasks in the public interest).

12. Retention Period

We retain data only as necessary for the stated purposes, our Policy/Notices/laws, or legitimate interests (e.g., proof of Service, civil statute of limitations up to 10 years, or criminal cases). We limit retention to what is necessary and, upon expiry, delete/destroy or anonymize per applicable standards. In case of disputes/exercise of rights/legal proceedings, we may retain data until final resolution.

13. Third Parties and Sub-processors

We may engage third parties (processors) to process data on our behalf (e.g., hosting, outsourcing, cloud, contractors). We will have agreements that specify rights, duties, data categories, purposes, scope, and instructions. Where sub-processors are used, we will require standard agreements no less protective than the primary agreement.

14. How to Request Deletion

You may request deletion by emailing dpo@aiya.ai with:
  1. Your full name
  2. The data you wish to delete (e.g., all data related to you)
  3. Reason for the request (if any)
We will review and delete within 30 days from receipt (for large volumes, we will inform you of the timeframe within 30 days). Deletion is subject to standards and applicable laws. If the data remain necessary or lawfully retainable to establish/exercise legal claims or defend against claims, we may retain them as appropriate. Some deletions may affect your convenience in using the Services. For questions, contact the email above.

15. Security Measures

We restrict access to authorized personnel on a need-to-know basis and require strict confidentiality. We implement organizational and technical safeguards in line with international standards and regulatory requirements. When transferring/disclosing to third parties, we require appropriate security and confidentiality measures by law.

16. Data Protection Officer (DPO)

MeGenius has appointed a DPO to advise, monitor, and ensure compliance with the PDPA and to coordinate with the Personal Data Protection Committee.

17. Your Rights under the PDPA

MeGenius has appointed a DPO to oversee and coordinate compliance. Your rights are as prescribed by law.

18. Non-Compliance

Non-compliance may constitute a violation and be subject to disciplinary action (for employees) or breach of a data processing agreement (for processors), and may be subject to penalties under the PDPA and related regulations.

19. Complaints to the Supervisory Authority

If you believe we are not complying with the law, you have the right to lodge a complaint with the Personal Data Protection Committee or a designated authority. However, we encourage you to contact MeGenius first so we can clarify and resolve your concerns at the earliest opportunity.

20. Changes to this Policy

MeGenius may update or amend this Policy and will notify via https://web.aiya.ai/ with an effective date indicated. Please review the latest Policy regularly. Continued use of the Services after the effective date constitutes acceptance. If you do not agree, please discontinue use and contact us for clarification.

21. Contact

Data Controller
  • Name: MeGenius Co., Ltd.
  • Address: 304 Vanit Place Aree, 21st Floor, Unit 2105, Phahonyothin Rd., Samsen Nai, Phaya Thai, Bangkok 10400
  • Contact: dpo@aiya.ai

Data Protection Officer (DPO)
  • Name: Pisith Wongmuangsaen
  • Address: 304 Vanit Place Aree, 21st Floor, Unit 2105, Phahonyothin Rd., Samsen Nai, Phaya Thai, Bangkok 10400
  • Contact: dpo@aiya.ai`,
      agreeText: "I agree to the personal data protection terms",
      continueButton: "Accept",
    },
  };

  const content = pdpaContent[lang as "th" | "en"] || pdpaContent.th;

  return (
    <>
      <div className="m-4 mt-16 flex min-h-0 flex-1">
        <div className="flex min-h-0 w-full flex-1 flex-col rounded-xl bg-white p-4">
          <form
            onSubmit={handleSubmit}
            className="flex min-h-0 flex-1 flex-col space-y-6"
          >
            {/* Campaign Info */}
            {/* <div className="rounded-lg bg-blue-50 p-4">
                <h2 className="font-semibold text-blue-900">
                  {campaign.title?.[lang]}
                </h2>
                <p className="text-sm text-blue-700">{content.subtitle}</p>
              </div> */}

            {/* PDPA Content */}
            <div className="flex min-h-0 flex-1 flex-col space-y-4 overflow-hidden">
              <div className="flex items-center justify-center text-balance text-center font-semibold">
                {content.title}
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="prose prose-sm text-gray-700">
                  <div className="whitespace-pre-line text-pretty text-xs">
                    {content.content}
                  </div>
                </div>
              </div>

              {/* Checkbox */}
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="pdpa-consent"
                checked={hasAgreed}
                onChange={(e) => setHasAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary"
              />
              <label
                htmlFor="pdpa-consent"
                className="cursor-pointer text-sm text-gray-700"
              >
                {content.agreeText}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!hasAgreed || isPending}
              className="w-full rounded-lg px-4 py-3 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                backgroundColor:
                  !hasAgreed || isPending ? "#9CA3AF" : primaryColor,
              }}
            >
              {isPending
                ? lang === "th"
                  ? "กำลังบันทึก..."
                  : "Saving..."
                : content.continueButton}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainContent;
