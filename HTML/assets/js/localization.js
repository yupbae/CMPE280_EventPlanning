var ip = 0;
var loc = "US";
var region = "";
var resp = "";
var parseData = "";
$.get("http://ipinfo.io", function (response) {
      ip = response.ip;
      region = response.region;
      resp = JSON.stringify(response, null, 4);
      parseData = JSON.parse(resp);
      loc = parseData.country;
      console.log("IP:",ip,loc,resp,loc);
      
      if (loc == "ES") {
      $(location).attr('href', './locale/index_sp.html')
      }
      
      if (loc == "CN") {
      $(location).attr('href', './locale/index_cn.html')
      }
      
      if (loc == "IN") {
      $(location).attr('href', './locale/index_hi.html')
      }
      
      if (loc == "IL") {
      $(location).attr('href', './locale/index_hb.html')
      }
      
      if (loc == "JP") {
      $(location).attr('href', './locale/index_jp.html')
      }
      
      }, "jsonp");



    function renderContactPage_CN() {
        if(login == "1")
            location.href = "./locale/contact_cn.html?login=1&userid="+user;
        else
            location.href = "./locale/contact_cn.html?login=0";
    }
    function renderContactPage_HB() {
        if(login == "1")
            location.href = "./locale/contact_hb.html?login=1&userid="+user;
        else
            location.href = "./locale/contact_hb.html?login=0";
    }
    function renderContactPage_JP() {
        if(login == "1")
            location.href = "./locale/contact_jp.html?login=1&userid="+user;
        else
            location.href = "./locale/contact_jp.html?login=0";
    }

    function renderAboutPage_CN() {
        if(login == "1")
            location.href = "./locale/pages-about-us_cn.html?login=1&userid="+user;
        else
            location.href = "./locale/pages-about-us_cn.html?login=0";
    }
    function renderAboutPage_HB() {
        if(login == "1")
            location.href = "./locale/pages-about-us_hb.html?login=1&userid="+user;
        else
            location.href = "./locale/pages-about-us_hb.html?login=0";
    }
    function renderAboutPage_JP() {
        if(login == "1")
            location.href = "./locale/pages-about-us_jp.html?login=1&userid="+user;
        else
            location.href = "./locale/pages-about-us_jp.html?login=0";
    }
