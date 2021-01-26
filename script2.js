//2nd


$("p").each(function() { 
    let p = $(this).text();
    
    let splt = p.split(' ');
    console.log(splt);

    let s = "<strong>" + splt[0] + "</strong>";
    console.log(s);

    splt[0] = s;
    console.log(s[0]);
  
    $(this).html(splt.join(" "));
});
