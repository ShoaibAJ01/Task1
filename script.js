function pageprint(myform){
    var pageprint = document.getElementById("myform");
    newwin = window.open("");
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
}