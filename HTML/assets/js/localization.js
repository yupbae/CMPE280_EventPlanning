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
      $(location).attr('href', './index_sp.html')
      }
      
      if (loc == "CN") {
      $(location).attr('href', './index_cn.html')
      }
      
      if (loc == "IN") {
      $(location).attr('href', './index_hi.html')
      }
      
      if (loc == "IL") {
      $(location).attr('href', './index_hb.html')
      }
      
      if (loc == "JP") {
      $(location).attr('href', './index_jp.html')
      }
      
      }, "jsonp");
