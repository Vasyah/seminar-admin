export const getPaymentTemplate = (
  title: string,
  seminarDate: string,
  startArriveDate: string,
  lastTransferDate: string,
  foodInfo:string
): string => {
  return `<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<style>.cl_115200 .ExternalClass_mr_css_attr{
width:100%;
}.cl_115200 img{
border-top-color:currentColor;
border-top-style:none;
border-top-width:0px;
border-right-color:currentColor;
border-right-style:none;
border-right-width:0px;
border-bottom-color:currentColor;
border-bottom-style:none;
border-bottom-width:0px;
border-left-color:currentColor;
border-left-style:none;
border-left-width:0px;
height:auto;
line-height:100%;
outline-color:invert;
outline-style:none;
outline-width:medium;
text-decoration:none;
}.cl_115200 a img{
border-top-color:currentColor;
border-top-style:none;
border-top-width:0px;
border-right-color:currentColor;
border-right-style:none;
border-right-width:0px;
border-bottom-color:currentColor;
border-bottom-style:none;
border-bottom-width:0px;
border-left-color:currentColor;
border-left-style:none;
border-left-width:0px;
}.cl_115200 #outlook_mr_css_attr a{
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
}.cl_115200 #allrecords_mr_css_attr{
height:100% !important;
margin-top:0px;
margin-right:0px;
margin-bottom:0px;
margin-left:0px;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
width:100% !important;
line-height:1.450195;
}.cl_115200 #allrecords_mr_css_attr td{
margin-top:0px;
margin-right:0px;
margin-bottom:0px;
margin-left:0px;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
}.cl_115200 #allrecords_mr_css_attr ul{
}.cl_115200 .t-records_mr_css_attr ol, .cl_115200 .t-records_mr_css_attr ul{
padding-left:20px;
margin-top:0px;
margin-bottom:10px;
}@media  only screen and (max-width: 600px){
.cl_115200 .r_mr_css_attr{
width:100% !important;
min-width:400px !important;
}
}@media  only screen and (max-width: 480px){
.cl_115200 .t-emailBlock_mr_css_attr{
display:block !important;
padding-left:0px !important;
padding-right:0px !important;
width:100% !important;
}.cl_115200 .t-emailBlockPadding_mr_css_attr{
padding-top:15px !important;
}.cl_115200 .t-emailBlockPadding30_mr_css_attr{
padding-top:30px !important;
}.cl_115200 .t-emailAlignLeft_mr_css_attr{
text-align:left !important;
margin-left:0px !important;
}.cl_115200 .t-emailAlignCenter_mr_css_attr{
text-align:center !important;
margin-left:auto !important;
margin-right:auto !important;
}
}</style>
</head>
<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<div id="style_16770682701103323308_BODY"><div class="cl_115200"><table id="allrecords_mr_css_attr" class="t-records_mr_css_attr" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;border-spacing:0;padding:0;margin:0;border:0;"> <tbody><tr> <td style="background-color: #fafafa;"><table id="rec496468240_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468240_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:0px;padding-left:0;padding-right:0;"><table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tbody><tr> <td style="height:30px;" height="30px"></td> </tr> </tbody></table> </td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496468241_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468241_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-left:0;padding-right:0;"></td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496468242_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468242_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:0px;padding-left:30px;padding-right:30px;"> <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"> <tbody><tr> <td style="text-align: left;padding: 0 0 0;"> <div style="margin-right: auto;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#222222;font-size:28px;font-weight:bold;"><p style="text-align: center;">СЕМИНАР</p><p style="text-align: center;">${title}</p><p style="text-align: center;">${seminarDate}</p><p style="text-align: center;">БАЗА ОТДЫХА "ЗЕЛЕНЫЙ ОСТРОВ"</p></div> </td> </tr> </tbody></table></td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496468243_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468243_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-bottom:15px;padding-left:30px;padding-right:30px;"> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"> <tbody><tr> <td style="text-align: center;padding: 0 0 0;"> <div style="margin: 0 auto;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#444444;font-size:24px;line-height:1.4;">Поздравляем Вас с успешной оплатой !</div> </td> </tr> </tbody></table></td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496468247_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468247_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffc7c7;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:15px;padding-left:30px;padding-right:30px;"> <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"> <tbody><tr> <td style="text-align: left;padding: 0 0 0;"> <div style="margin-right: auto;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#000000;font-size:16px;line-height:1.3;">❗Напоминаем, что заезд на базу осуществляется не ранее <strong>${startArriveDate}.</strong></div> </td> </tr> </tbody></table></td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496539141_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496539141_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffc7c7;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:15px;padding-left:30px;padding-right:30px;"> <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"> <tbody><tr> <td style="text-align: left;padding: 0 0 0;"> <div style="margin-right: auto;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#000000;font-size:16px;line-height:1.3;">❗Если Вас необходимо будет встретить со станции Румянцево, просьба до <strong>${lastTransferDate}</strong> сообщить <strong>Назаренко Анастасии</strong> - <a href="tel:+79645739497" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer"><span class="js-phone-number">89645739497</span></a></div> </td> </tr> </tbody></table></td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496468248_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468248_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffc7c7;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:0px;padding-left:30px;padding-right:30px;"> <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"> <tbody><tr> <td style="text-align: left;padding: 0 0 0;"> <div style="margin-right: auto;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#222222;font-size:16px;line-height:1.3;">❗Если Вам необходимы дополнительные приемы пищи (${foodInfo}), просьба до <strong>${lastTransferDate}</strong> сообщить <strong>Сэн Хи</strong> - <a href="tel:+79137130909" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer"><span class="js-phone-number">89137130909</span></a></div> </td> </tr> </tbody></table></td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496539495_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496539495_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:0px;padding-left:30px;padding-right:30px;"> <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"> <tbody><tr> <td style="text-align: center;padding: 0 0 0;"> <div style="margin: 0 auto;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#e65353;font-size:16px;line-height:1.3;font-weight:bold;">Организаторы будут рады помочь Вам с любым вопросом!<br><br></div> </td> </tr> </tbody></table></td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496468249_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468249_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:0px;padding-left:30px;padding-right:30px;"> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tbody><tr> <td valign="middle" style="width: 50px;"> <a href="/" target="_blank" rel=" noopener noreferrer"><img width="50" style="display: block;width: 100%;" src="https://i.pinimg.com/originals/49/02/19/490219e137ca21f8c789278424e4693a.png"> </a> </td> <td valign="middle" style="padding-left: 20px;"> <table border="0" cellpadding="0" cellspacing="0" width="100%;"> <tbody><tr> <td style="text-align: left;"> <a href="/" style="text-decoration: none;color: #222222;" target="_blank" rel=" noopener noreferrer"> </a><div style="font-weight: normal;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#222222;font-size:14px;line-height:1.25;"><a href="/" style="text-decoration: none;color: #222222;" target="_blank" rel=" noopener noreferrer">По всем вопросам<br>Ольга: </a><a href="tel:+79099768767" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer"><span class="js-phone-number">89099768767</span></a> <a href="https://t.me/olyaolyaru" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer">@olyaolyaru</a></div>  </td> </tr> </tbody></table> </td> </tr> </tbody></table> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td style="height: 2px;"></td> </tr> <tr> </tr> <tr> <td style="height: 2px;"></td> </tr> </tbody></table> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tbody><tr> <td valign="middle" style="width: 50px;"> <a href="/" target="_blank" rel=" noopener noreferrer"> <img width="50" style="display: block;width: 100%;" src="https://i.pinimg.com/originals/49/02/19/490219e137ca21f8c789278424e4693a.png"> </a> </td> <td valign="middle" style="padding-left: 20px;"> <table border="0" cellpadding="0" cellspacing="0" width="100%;"> <tbody><tr> <td style="text-align: left;"> <a href="/" style="text-decoration: none;color: #222222;" target="_blank" rel=" noopener noreferrer"> </a><div style="font-weight: normal;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#222222;font-size:14px;line-height:1.25;"><a href="/" style="text-decoration: none;color: #222222;" target="_blank" rel=" noopener noreferrer">Администратор канала<br>Ксения: </a><a href="tel:+79161515263" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer"><span class="js-phone-number">89161515263</span></a> <a href="https://t.me/kseniadobraya" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer">@kseniadobraya</a></div>  </td> </tr> </tbody></table> </td> </tr> </tbody></table> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td style="height: 2px;"></td> </tr> <tr> </tr> <tr> <td style="height: 2px;"></td> </tr> </tbody></table> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tbody><tr> <td valign="middle" style="width: 50px;"> <a href="/" target="_blank" rel=" noopener noreferrer"> <img width="50" style="display: block;width: 100%;" src="https://i.pinimg.com/originals/49/02/19/490219e137ca21f8c789278424e4693a.png"> </a> </td> <td valign="middle" style="padding-left: 20px;"> <table border="0" cellpadding="0" cellspacing="0" width="100%;"> <tbody><tr> <td style="text-align: left;"> <a href="/" style="text-decoration: none;color: #222222;" target="_blank" rel=" noopener noreferrer"> </a><div style="font-weight: normal;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#222222;font-size:14px;line-height:1.25;"><a href="/" style="text-decoration: none;color: #222222;" target="_blank" rel=" noopener noreferrer">Техническая поддержка<br>Василий: </a><a href="tel:+79133712749" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer"><span class="js-phone-number">89133712749</span></a> <a href="https://t.me/vasyahG" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer">@vasyahG</a></div>  </td> </tr> </tbody></table> </td> </tr> </tbody></table> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td style="height: 2px;"></td> </tr> <tr> </tr> <tr> <td style="height: 2px;"></td> </tr> </tbody></table> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tbody><tr> <td valign="middle" style="width: 50px;"> <img width="50" style="display: block;width: 100%;" src="https://i.pinimg.com/originals/49/02/19/490219e137ca21f8c789278424e4693a.png"> </td> <td valign="middle" style="padding-left: 20px;"> <table border="0" cellpadding="0" cellspacing="0" width="100%;"> <tbody><tr> <td style="text-align: left;"> <div style="font-weight: normal;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;color:#222222;font-size:14px;line-height:1.25;">Канал семинара <a href="https://t.me/+TqmIN_DygLRRU3Ck" target="_blank" style="color: rgb(150, 112, 207);" rel=" noopener noreferrer">telegram</a></div> </td> </tr> </tbody></table> </td> </tr> </tbody></table> </td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496468250_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468250_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:0px;padding-left:30px;padding-right:30px;"> <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td style="height:15px;" height="15px"></td> </tr> <tr> <td style="height:1px;background-color:#e8e8e8;" height="1px"></td> </tr> <tr> <td style="height:15px;" height="15px"></td> </tr> </tbody></table> </td></tr></tbody></table> </td> </tr></tbody></table><table id="rec496468251_mr_css_attr" style="width:100%;border-collapse:collapse;border-spacing:0;margin:0;border:0;" cellpadding="0" cellspacing="0"> <tbody><tr> <td style="padding-left:15px;padding-right:15px;"> <table id="recin496468251_mr_css_attr" class="r_mr_css_attr" style="margin: 0 auto;border-spacing: 0;width:600px;" align="center"><tbody><tr><td style="padding-top:0px;padding-bottom:0px;padding-left:0;padding-right:0;"><table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tbody><tr> <td style="height:30px;" height="30px"></td> </tr> </tbody></table> </td></tr></tbody></table> </td> </tr></tbody></table> </td> </tr></tbody></table></div></div></body></html>`;
};
