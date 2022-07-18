// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "Menceritakan tentang liburan ku selama  ini  dan juga memberikan reverensi liburan untuk anda   INFO  Jl Panggungrejo Email  kurangtau@gmail.com Phone   086869659   SOCIAL MEDIA  ABOUT ME  Saya Adalah orang yang hidup di bumi  Copyright © GVR 2022 All right reserved    ", "");
   return this;
}
