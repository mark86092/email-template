
const escapeHtml = require("escape-html");

/**
 * @param {string} params.username 使用者名稱
 * @param {string} params.experience.viewCount 瀏覽次數
 * @param {string=["面試經驗", "工作心得", "實習心得"]} params.experience.typeName 職場經驗種類
 */
const genSubject = ({ username, experience }) => {
  return `哈囉 ${username}，你的${experience.typeName}文章已經幫助了 ${experience.viewCount} 位求職者`;
}

// TODO: temporally fixed
const callToActionButtonUrl = 'https://www.goodjob.life/share/interview/step1?utm_source=goodjob&utm_medium=email&utm_campaign=experience_view_log_notification_call_to_action_button';
const callToActionButtonText = '留下你的面試經驗';

/**
 * @param {string} params.username 使用者名稱
 * @param {string} params.experience.viewCount 瀏覽次數
 * @param {string} params.experience.title 職場經驗標題
 * @param {string=["面試經驗", "工作心得", "實習心得"]} params.experience.typeName 職場經驗種類
 * @param {string} params.experience.content 職場經驗內容
 * @param {string} params.experience.url 職場經驗網址
 * @param {string} params.relatedContent.keyword 相關領域的關鍵字
 * @param {string} params.relatedContent.experiences 相關領域文章列表
 * @param {string} params.relatedContent.experiences[i].title 相關領域文章標題
 * @param {string} params.relatedContent.experiences[i].url 相關領域文章連結
 */
const genBodyHTML = ({
  username,
  experience,
  relatedContent,
}) => {
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
          <td class="body__content" align="left" width="100%" valign="top" style="color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5;">
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
                                  <p class="center text p" style="margin: 0; color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5; width: 100%; display: block; text-align: center; margin-left: auto; margin-right: auto;">
                                    <a href="${escapeHtml(experience.url)}" class="a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; text-decoration: none;"><span class="a__text" style="text-decoration: none;"><img src="https://image.goodjob.life/logo_570x70.png" width="285" height="35" alt="goodjob 職場透明化運動" border="0" class="img__block" style="display: block; max-width: 100%; margin-right: auto; margin-left: auto;" /></span></a>
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
                                                <p class="center mb-xs text p" style="margin: 0; color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 16px; width: 100%; display: block; text-align: center; margin-left: auto; margin-right: auto;">
                                                  <img src="https://image.goodjob.life/email/clapping.gif" width="70" height="70" border="0" alt="" class="img__block" style="display: block; max-width: 100%; margin-right: auto; margin-left: auto;" />
                                                </p>
                                                <!-- start h1 -->
                                                <h1 class="heading-m header h1" style="margin: 0; color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; line-height: 1.4; font-size: 28px; font-weight: 700;">哈囉 ${username}，你的${experience.typeName}文章已經幫助了 ${experience.viewCount} 位求職者</h1>
                                                <!-- end h1 -->
                                                <!-- start content -->
                                                <div class="row">
                                                  <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                                    <tr class="row__row">
                                                      <td class="pt-xs pb-xs column col-sm-12" width="700" style="padding-bottom: 16px; padding-top: 16px;width: 100%" align="left" valign="top">
                                                        <p class="p mb-xs text p" style="display: block; margin: 0; color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 16px;"> 真棒！避免大家找工作時踩雷，也讓好的公司被看見，台灣的職場因為有你變得更美好 😉 </p>
                                                        <div class="article block" style="width: 100%;"> <!--[if mso | IE]> <table class="block__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="700">
                                                            <tr>
                                                              <td> <![endif]--> <table class="block__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                                                                  <tr class="block__row">
                                                                    <td class="block__cell" width="100%" align="left" valign="top" style="background-color: #FFFFFF; border-radius: 4px; border: 1px solid #EEEEEE; box-shadow: 0 0 5px #DDDDDD; padding: 24px;" bgcolor="#FFFFFF">
                                                                      <a href="${escapeHtml(experience.url)}" class="a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; text-decoration: none;"><span class="a__text" style="text-decoration: none;">
                                                                          <h2 class="subheading-m-bold mb-xxs header h2" style="margin: 0; color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 18px; font-weight: 700; line-height: 1.3; margin-bottom: 8px;">${experience.title}</h2>
                                                                          <p class="p-s text p" style="display: block; margin: 0; color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 15px; line-height: 1.4;">${experience.content}</p>
                                                                        </span></a>
                                                                    </td>
                                                                  </tr>
                                                                </table> <!--[if mso | IE]> </td>
                                                            </tr>
                                                          </table> <![endif]--> </div>
                                                        <p class="p mt-xs mb-xs text p" style="display: block; margin: 0; color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5; margin-top: 16px; margin-bottom: 16px;"> 歡迎隨時回來和大家分享你的薪資、面試經驗或工作心得，讓這個屬於勞方的資料庫更強大！ </p>
                                                        <!-- start button -->
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table" style="border-collapse: collapse;">
                                                          <tr class="tr">
                                                            <td align="left" class="td" style="border-collapse: collapse;">
                                                              <table border="0" cellspacing="0" cellpadding="0" class="table" style="border-collapse: collapse;">
                                                                <tr class="tr">
                                                                  <td align="center" bgcolor="#fcd406;" class="td" style="border-collapse: collapse;">
                                                                    <a href="${escapeHtml(callToActionButtonUrl)}" class="button-m a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; text-decoration: none; padding: 10px 24px; font-weight: 700; background-color: #FCD406; color: #000000; display: inline-block;"><span class="a__text" style="text-decoration: none; color: #000000;">${callToActionButtonText}</span></a>
                                                                  </td>
                                                                </tr>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </table>
                                                        <!-- end button -->
                                                        ${relatedContent && relatedContent.keyword && relatedContent.experiences ?
                                                          `<p class="p mt-s text p" style="display: block; margin: 0; color: #333333; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; line-height: 1.5; margin-top: 32px;"> 或是查看<span class="bold" style="font-weight: 700;">${relatedContent.keyword}</span>領域的精選文章：<br />
                                                            ${relatedContent.experiences.map(exp => `<a class="border-blue-link a" href="${escapeHtml(exp.url)}" style="font-size: 16px; font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; text-decoration: underline; color: #325BBD;"><span class="a__text" style="text-decoration: underline; color: #325BBD;">${exp.title}</span></a><br />`).join('')}
                                                          </p>` : ''
                                                        }

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
                                    <span>© GoodJob.life team</span>&nbsp;&nbsp;<a href="https://www.goodjob.life" class="a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; color: #999999; text-decoration: none;"><span class="a__text" style="color: #999999; text-decoration: none;">官方網站</span></a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.facebook.com/goodjob.life" class="a" style="font-family: 'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif; color: #999999; text-decoration: none;"><span class="a__text" style="color: #999999; text-decoration: none;">facebook</span></a>
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
  genBodyHTML,
}
