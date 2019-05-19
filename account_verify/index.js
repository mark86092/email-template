
const escapeHtml = require("escape-html");

const genSubject = () => {
  return "職場透明化運動電子信箱驗證信";
}

const genBodyHtml = (username, verifyUrl) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head> </head>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--<![endif]-->
      <style type="text/css">
        * {
          text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        html {
          height: 100%;
          width: 100%;
        }

        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          mso-line-height-rule: exactly;
        }

        div[style*="margin: 16px 0"] {
          margin: 0 !important;
        }

        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }

        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }

        .ReadMsgBody,
        .ExternalClass {
          width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
      </style>
      <!--[if gte mso 9]>
        <style type="text/css">
        li { text-indent: -1em; }
        table td { border-collapse: collapse; }
        </style>
        <![endif]-->
      <title> </title>
      <style>
        @media (max-width:550px) {
          .block.white-block .block__cell {
            padding: 42px 16px !important;
          }
        }

        @media (max-width:550px) {
          .image-gutter {
            padding-left: 8px;
          }
        }
      </style><!-- content -->
      <!--[if gte mso 9]><xml>
         <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
         </o:OfficeDocumentSettings>
        </xml><![endif]-->
    </head>
    <body class="body" style="background-color: #F5F5F5; margin: 0; width: 100%;">
      <table class="bodyTable" role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #F5F5F5; margin: 0;" bgcolor="#F5F5F5">
        <tr>
          <td class="body__content" align="left" width="100%" valign="top" style="color: #000000; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5;">
            <table border="0" align="center" cellpadding="0" cellspacing="0" width="100%" class="table" style="border-collapse: collapse;">
              <tbody>
                <tr class="tr">
                  <td class="td" style="border-collapse: collapse; padding-top: 40px; padding-bottom: 40px;">
                    <!-- start logo -->
                    <div class="main-container pb-xs container" style="width: 100%; margin: 0 auto; padding-bottom: 16px; margin-left: auto; margin-right: auto; max-width: 700px;"> <!--[if mso | IE]> <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style=" margin-left: auto; margin-right: auto;width: 700px" width="700" align="center">
                        <tr>
                          <td> <![endif]--> <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top" style="padding-left: 16px; padding-right: 16px; padding-bottom: 16px;">
                                  <p class="center text p" style="color: #000000; margin: 0; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5; width: 100%; display: block; text-align: center; margin-left: auto; margin-right: auto;">
                                    <a href="https://www.goodjob.life?utm_source=email" class="a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; text-decoration: none;"><span class="a__text" style="text-decoration: none;"><img src="data:image/png;base64,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" width="285" height="35" alt="goodjob 職場透明化運動" border="0" class="img__block" style="display: block; max-width: 100%; margin-right: auto; margin-left: auto;" /></span></a>
                                  </p>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                    <!-- end logo -->
                    <!-- start content -->
                    <div class="main-container container" style="width: 100%; margin: 0 auto; margin-left: auto; margin-right: auto; max-width: 700px;"> <!--[if mso | IE]> <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style=" margin-left: auto; margin-right: auto;width: 700px" width="700" align="center">
                        <tr>
                          <td> <![endif]--> <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top" style="padding-left: 16px; padding-right: 16px;">
                                  <div class="white-block block" style="width: 100%;"> <!--[if mso | IE]> <table class="block__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="700">
                                      <tr>
                                        <td> <![endif]--> <table class="block__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                                            <tr class="block__row">
                                              <td class="block__cell" width="100%" align="left" valign="top" style="background-color: #FFFFFF; border-radius: 4px; padding: 32px 40px;" bgcolor="#FFFFFF">
                                                <!-- start h1 -->
                                                <h1 class="heading-m header h1" style="color: #000000; margin: 0; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; line-height: 1.4; font-size: 28px; font-weight: 700;">認證你的 Email</h1>
                                                <!-- end h1 -->
                                                <!-- start content -->
                                                <div class="row">
                                                  <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                                    <tr class="row__row">
                                                      <td class="pt-xs pb-xs column col-sm-12" width="700" style="padding-bottom: 16px; padding-top: 16px;width: 100%" align="left" valign="top">
                                                        <p class="p text p" style="display: block; color: #000000; margin: 0; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5;"> ${escapeHtml(username)} 你好，感謝你使用 goodjob 平台，點選以下按鈕認證你的 Email。 </p>
                                                        <div class="row">
                                                          <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                                            <tr class="row__row">
                                                              <td class="pb-s column col-sm-12" width="700" style="padding-bottom: 32px;width: 100%" align="left" valign="top"> </td>
                                                            </tr>
                                                          </table>
                                                        </div>
                                                        <!-- start button -->
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table" style="border-collapse: collapse;">
                                                          <tr class="tr">
                                                            <td align="left" class="td" style="border-collapse: collapse;">
                                                              <table border="0" cellspacing="0" cellpadding="0" class="table" style="border-collapse: collapse;">
                                                                <tr class="tr">
                                                                  <td align="center" bgcolor="#fcd406;" class="td" style="border-collapse: collapse;">
                                                                    <a href="${escapeHtml(verifyUrl)}" class="button-m a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; text-decoration: none; padding: 10px 24px; font-weight: 700; background-color: #FCD406; color: #000000; display: inline-block;"><span class="a__text" style="text-decoration: none; color: #000000;">帳號認證</span></a>
                                                                  </td>
                                                                </tr>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </table>
                                                        <!-- end button -->
                                                        <div class="row">
                                                          <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                                            <tr class="row__row">
                                                              <td class="pt-s column col-sm-12" width="700" style="padding-top: 32px;width: 100%" align="left" valign="top"> </td>
                                                            </tr>
                                                          </table>
                                                        </div>
                                                        <!-- start hr -->
                                                        <table border="0" align="center" cellpadding="0" cellspacing="0" width="100%" class="table" style="border-collapse: collapse;">
                                                          <tbody>
                                                            <tr class="tr">
                                                              <td class="td" style="border-collapse: collapse; width: 100%; padding: 0; height: 1px; border-bottom: 1px solid #D6DADF;" width="100%" height="1"> </td>
                                                            </tr>
                                                          </tbody>
                                                        </table><!-- end hr -->
                                                        <div class="row">
                                                          <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                                            <tr class="row__row">
                                                              <td class="pt-xs column col-sm-12" width="700" style="padding-top: 16px;width: 100%" align="left" valign="top"> </td>
                                                            </tr>
                                                          </table>
                                                        </div>
                                                        <p class="text p" style="display: block; color: #000000; margin: 0; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5;"> 本郵件是由系統自動寄發，請勿直接回覆。如有任何問題，請聯絡我們：<br />
                                                          <a href="mailto:findyourgoodjob@gmail.com" class="border-link a" style="color: #000000; font-size: 16px; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; text-decoration: underline;"><span class="a__text" style="color: #000000; text-decoration: underline;">findyourgoodjob@gmail.com</span></a>
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </div>
                                                <!-- end content -->
                                              </td>
                                            </tr>
                                          </table> <!--[if mso | IE]> </td>
                                      </tr>
                                    </table> <![endif]--> </div>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                    <!-- end content -->
                    <!-- start footer -->
                    <div class="main-container pb-xs pt-xs container" style="width: 100%; margin: 0 auto; padding-bottom: 16px; padding-top: 16px; margin-left: auto; margin-right: auto; max-width: 700px;"> <!--[if mso | IE]> <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style=" margin-left: auto; margin-right: auto;width: 700px" width="700" align="center">
                        <tr>
                          <td> <![endif]--> <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top" style="padding-left: 16px; padding-right: 16px; padding-bottom: 16px; padding-top: 16px;">
                                  <p class="footer text p" style="display: block; margin: 0; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; line-height: 1.5; color: #999999; font-size: 14px; text-align: center;">
                                    <span>© GoodJob.life team</span>&nbsp;&nbsp;<a href="https://www.goodjob.life?utm_source=email" class="a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; color: #999999; text-decoration: none;"><span class="a__text" style="color: #999999; text-decoration: none;">官方網站</span></a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.facebook.com/goodjob.life" class="a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; color: #999999; text-decoration: none;"><span class="a__text" style="color: #999999; text-decoration: none;">facebook</span></a>
                                  </p>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                    <!-- end footer -->
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
      <div style="display:none; white-space:nowrap; font-size:15px; line-height:0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
    </body>
  </html>`
};

module.exports = {
  genSubject,
  genBodyHtml,
}
