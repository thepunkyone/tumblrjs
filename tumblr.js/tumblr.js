window.onload = function(){
    
    var select = $("<select/>", 
                 { name:'os0',
                    style:'margin-top:5px; font-size:17px;' 
                 }
            );
            
    select.append(
        $("<option/>", 
             { value:'Lime / S',
                html:'Lime / S &pound;10.00 GBP'
                 
             }
         )
    );
    
    select.append(
        $("<option/>", 
             { value:'Yellow / S',
                html:'Yellow / S &pound;10.00 GBP'
                 
             }
         )
    );
    
    select.append(
        $("<option/>", 
             { value:'Lime / M',
                html:'Lime / M &pound;10.00 GBP'
                 
             }
         )
    );
    
    select.append(
        $("<option/>", 
             { value:'Yellow / M',
                html:'Yellow / M &pound;10.00 GBP'
                 
             }
         )
    );
    
    select.append(
        $("<option/>", 
             { value:'Lime / L',
                html:'Lime / L &pound;10.00 GBP'
                 
             }
         )
    );
    
    select.append(
        $("<option/>", 
             { value:'Yellow / L',
                html:'Yellow / L &pound;10.00 GBP'
                 
             }
         )
    );
    
    select.append(
        $("<option/>", 
             { value:'Lime / XL',
                html:'Lime / XL &pound;10.00 GBP'
                 
             }
         )
    );
    
    select.append(
        $("<option/>", 
             { value:'Yellow / XL',
                html:'Yellow / XL &pound;10.00 GBP'
                 
             }
         )
    );
    
    var form = $("<form/>", 
                 { action:'https://www.paypal.com/cgi-bin/webscr',
                    method:'post',
                    target: '_top'
                 }
            );
            
    form.append( 
        $("<input>", 
             { type:'hidden',
               name:'cmd', 
               value:'_s-xclick' }
         )
    );
    
    form.append( 
         $("<input>", 
              { type:'hidden', 
                name:'hosted_button_id', 
                value:'F22QERVERX5WN' }
           )
    );
    
     form.append( 
         $("<input>", 
              { type:'hidden', 
                name:'on0', 
                value:'Colour / Size' }
           )
    );
    
    form.append( 
         $("<span><h2><b>Choose Your Colour / Size (&pound;10.00 plus &pound;2 shipping)</b></h2></span>");
    
    form.append(select);
    
    form.append( 
         $("<input>", 
              { type:'hidden', 
                name:'currency_code', 
                value:'GBP' }
           )
    );
    
    form.append( 
         $("<input>", 
              { type:'image', 
                src:'https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif', 
                border:'0',
                name:'submit',
                style:'display:block; margin-top:5px',
                alt:'PayPal - The safer, easier way to pay online!'}
           )
    );
    
    form.append( 
         $("<img/>", 
              { border:'0', 
                src:'https://www.paypalobjects.com/en_US/i/scr/pixel.gif', 
                width:'1',
                height:'1'}
           )
    );
    
    $("#buy").append(form);
}
