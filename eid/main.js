const queryString = window.location.search;

const params = new URLSearchParams(queryString);

var lang = params.get("lang");

if (!lang) 
{
    console.log("Parameter: lang is not available, app will choose default");

    lang = "ar";
}
else
{
    console.log(`passed parameter = ${lang}`);

    if (lang === "ar")
    {
        lang = lang.toLowerCase();
    }
    else if (lang === "en")
    {
        lang = lang.toLowerCase();
    }
    else
    {
        lang = "ar";
    }

    console.log(`selected language = ${lang}`);
}

const author = "iKKLAB";
const url = "https://ikklab.github.io/eid";
const type = "website";

var title;
var description;
var local;
var image;

var message;
var label;
var link;

if (lang == "ar")
{
    title = "بطاقة تهنئة";
    description = "بطاقة تهنئة بمناسبة عيد الأضحى المبارك، أعاده الله علينا وعليكم باليمن والبركات ... كل عام وأنتم بخير";
    local = "ar";

    image = "https://ikklab.github.io/eid/ar/assets/thumbnail.jpg";
    logo = "https://ikklab.github.io/eid/ar/assets/logo.png";
 
    message = "مرحبا...\n\nيمكنك الوصول إلى التهنئة من خلال الرابط التالي:";
    label = "رابط الفيديو"
    link = "."
}
else
{
    title = "Eid Greeting";



}

document.title = title;

document.querySelector('meta[property~="og:title"][content]').content = title;
document.querySelector('meta[property~="og:locale"][content]').content = local;
document.querySelector('meta[property~="og:image"][content]').content = image;
document.querySelector('meta[property~="og:logo"][content]').content = logo;
document.querySelector('meta[property~="og:type"][content]').content = type;
document.querySelector('meta[property~="og:url"][content]').content = url;

document.querySelector('meta[name~="twitter:title"][content]').content = title;
document.querySelector('meta[name~="twitter:description"][content]').content = description;
document.querySelector('meta[name~="twitter:image"][content]').content = image;
document.querySelector('meta[property="twitter:url"][content]').content = url;

document.getElementById("message").innerText = message;
document.getElementById("link").innerText = label;
document.getElementById("link").setAttribute("href", link);