$(document).ready(function(){

// Reset (Refresh & Resize)

$(window).on('beforeunload',function() {
    $("input").val(0);
    $("select").children("option:selected").val(" ");
    }); 


$(window).on('resize',function() {
    $("input").val(0);
    $("select").children("option:selected").val(" ");
    }); 


/* ------------------------- TABS --------------------------------*/

    myflourTabs = 0;
    mywaterTabs = 0;
    mysaltTabs = 0;
    myyeastTabs = 0;
    mydoughTabs = 0;

// FUNCTIONS 
// My Command 
function getBreadWeightTabs(id){
    var selectedBread = $(".type"+id+"-tabs").children("option:selected").val();

       if(selectedBread == "normal"){
           var getBreadWeight = 550;
           $('.weight'+id+'-tabs').replaceWith("<span>"+getBreadWeight+"</span>");
           $('.printWeight'+id+'-tabs span:first').attr("class","weight"+id+"-tabs");  
            return getBreadWeight;
       
       } else if (selectedBread == "bastard"){
           var getBreadWeight = 350;
           $('.weight'+id+'-tabs').replaceWith("<span>"+getBreadWeight+"</span>");
           $('.printWeight'+id+'-tabs span:first').attr("class", "weight"+id+"-tabs");  
           return getBreadWeight;

       } else if (selectedBread == "baguetteH"){
           var getBreadWeight = 350;
           $('.weight'+id+'-tabs').replaceWith("<span>"+getBreadWeight+"</span>");
           $('.printWeight'+id+'-tabs span:first').attr("class","weight"+id+'-tabs');  
           return getBreadWeight;

       } else if (selectedBread == "baguetteL"){
           var getBreadWeight = 300;
           $('.weight'+id+'-tabs').replaceWith("<span>"+getBreadWeight+"</span>");
           $('.printWeight'+id+'-tabs span:first').attr("class","weight"+id+"-tabs");  
           return getBreadWeight;

       } else if (selectedBread == "ficelle"){
           var getBreadWeight = 150;
           $('.weight'+id+'-tabs').replaceWith("<span>"+getBreadWeight+"</span>");
           $('.printWeight'+id+'-tabs span:first').attr("class", "weight"+id+'-tabs');  
           return getBreadWeight;

       } else if (selectedBread == "scone"){
           var getBreadWeight = 75;
           $('.weight'+id+'-tabs').replaceWith("<span>"+getBreadWeight+"</span>");
           $('.printWeight'+id+'-tabs span:first').attr("class", "weight"+id+'-tabs');  
           return getBreadWeight;
       
       } else if (selectedBread == "" || selectedBread == null){
           var getBreadWeight = "unselected";
           return getBreadWeight; 
       }

   }   

   function getBreadQuantityTabs(id, counter){
       var getText = $(".qty"+id+'-tabs').val();
       getBreadQuantity = parseInt(getText);
       getBreadQuantity = getBreadQuantity + counter;
       return getBreadQuantity;
   }


   function getBreadTabs(id, counter){
       var bread = $(".bread"+id+'-tabs');
       var weight = getBreadWeightTabs(id);
       var qty = getBreadQuantityTabs(id, counter);

       if  (weight == "unselected" && (qty <0 || isNaN(qty))){
           bread.replaceWith("<span> Choisir un Pain ! <br> Ajouter une quantité positive !</span>");
           $(".printBread"+id+"-tabs span:first").attr("class", "bread"+id+'-tabs');

       } else if (weight == "unselected"){
           bread.replaceWith("<span> Choisir un pain ! </span>");
           $(".printBread"+id+"-tabs span:first").attr("class", "bread"+id+'-tabs');

       } else if (qty < 0 || isNaN(qty)){
           bread.replaceWith("<span> Ajouter une quantité positive ! </span>");
           $(".printBread"+id+"-tabs span:first").attr("class", "bread"+id+"-tabs");

       } else {
           var total =  weight*qty;
           if(total < 0){
               total = 0;
           } else {
           bread.replaceWith("<span>"+total+"</span>");
           $(".printBread"+id+"-tabs span:first").attr("class", "bread"+id+'-tabs');
           totalCommandTabs();
           return total;
           }
       }
   } 


   function totalCommandTabs(){
       $(".totalCommand-tabs").replaceWith("<span></span>");
       $(".result-command-tabs span:nth-child(2)").attr("class","totalCommand-tabs");

       var txt1 = $(".bread1-tabs").text();
       var res1 = parseInt(txt1);

       var txt2 = $('.bread2-tabs').text();
       var res2 = parseInt(txt2);

       var txt3 = $('.bread3-tabs').text();
       var res3 = parseInt(txt3);

       var txt4 = $('.bread4-tabs').text();
       var res4 = parseInt(txt4);

       var txt5 = $('.bread5-tabs').text();
       var res5 = parseInt(txt5);

       var txt6 = $('.bread6-tabs').text();
       var res6 = parseInt(txt6);

       if (isNaN(res1)){
           res1 = 0;
       }
       if (isNaN(res2)){
           res2 = 0;
       }
       if (isNaN(res3)){
           res3 = 0;
       }
       if (isNaN(res4)){
           res4 = 0;
       }
       if (isNaN(res5)){
           res5 = 0;
       }
       if (isNaN(res6)){
           res6 = 0;
       }
     
       res = (res1 + res2 + res3 + res4 + res5 + res6)/1000;
    
       $(".totalCommand-tabs").replaceWith("<span>"+res+"</span>");
       $(".result-command-tabs span:nth-child(2)").attr("class","totalCommand-tabs");
   }



//MyRecipe 
function totalRecipeTabs(counter, id){
    $(".totalRecipe-tabs").replaceWith("<span></span");
    $(".result-recipe-tabs span:nth-child(2)").attr("class", "totalRecipe-tabs");

    var flour = $(".qtyFlour-tabs").val();
    myflourTabs = parseFloat(flour);
    myflourTabs = myflourTabs/1000;
    var water = $(".qtyWater-tabs").val();
    mywaterTabs = parseFloat(water);
    mywaterTabs = mywaterTabs/1000;
    var salt = $(".qtySalt-tabs").val();
    mysaltTabs = parseFloat(salt);
    mysaltTabs = mysaltTabs/1000;
    var yeast = $(".qtyYeast-tabs").val();
    myyeastTabs = parseFloat(yeast);
    myyeastTabs = myyeastTabs/1000;
    var dough= $(".qtyDough-tabs").val();
    mydoughTabs = parseFloat(dough);
    mydoughTabs = mydoughTabs/1000;


    if (myflourTabs < 0 || isNaN(myflourTabs)){
        myflourTabs = 0;
    }
    if (mywaterTabs < 0 || isNaN(mywaterTabs)){
        mywaterTabs = 0;
    }
    if (mysaltTabs < 0 || isNaN(mysaltTabs)){
        mysaltTabs = 0;
    }
    if (myyeastTabs < 0 || isNaN(myyeastTabs)){
        myyeastTabs = 0;
    }
    if (mydoughTabs < 0 || isNaN(mydoughTabs)){
        mydoughTabs = 0;
    }


    if( id == 1){
        myflourTabs = myflourTabs + counter;
    }
    if( id == 2){
        mywaterTabs = mywaterTabs + counter;
    }
    if( id == 3){
        mysaltTabs = mysaltTabs + counter;
    }
    if(id == 4){
        myyeastTabs = myyeastTabs + counter;
    }
    if(id == 5){
        mydoughTabs = mydoughTabs + counter;
    }

    var res = myflourTabs + mywaterTabs + mysaltTabs + myyeastTabs + mydoughTabs;
    var res = res.toFixed(2);

    if(res <0 ){
        res = 0;
    }

    $(".totalRecipe-tabs").replaceWith("<span>"+res+"</span>");
    $(".result-recipe-tabs span:nth-child(2)").attr("class", "totalRecipe-tabs");
}




// My Process

    function getVariable1Tabs(){
        $(".var1-tabs").replaceWith("<span></span>");
        $(".printVar1-tabs span").attr("class", "var1-tabs");

        variable1 = $(".variable1-tabs").children("option:selected").val();

        if (variable1 == "Command"){
           var text =  $(".totalCommand-tabs").text();
           var totalCommand = parseFloat(text);
           if(totalCommand >= 0){
            $(".var1-tabs").replaceWith("<span>"+totalCommand+"</span>");
            $(".printVar1-tabs span").attr("class", "var1-tabs");
            return totalCommand;
           } else {
           $(".var1-tabs").replaceWith("<span> la commande n'a pas été calculée</span>");
           $(".printVar1-tabs span").attr("class", "var1-tabs");
           }
    
        } else if (variable1 == "Recipe"){
            var text = $(".totalRecipe-tabs").text();
            var totalRecipe = parseFloat(text);
            if(totalRecipe >= 0){
                $(".var1-tabs").replaceWith("<span>"+totalRecipe+"</span>");
                $(".printVar1-tabs span").attr("class", "var1-tabs");
                return totalRecipe;
            } else{
            $(".var1-tabs").replaceWith("<span> la recette de base n'a pas été calculée </span>");
            $(".printVar1-tabs span").attr("class", "var1-tabs");
            }
        }
    }

    
    function getOperatorTabs(){
        var operator = $(".operator-tabs").children("option:selected").val();
    
        if(operator == "multiply"){
            return operator 
        } else if (operator == "divide"){
            return operator;
        } else 
            return;
    }
    
    
    
    function getVariable2Tabs(){
        $(".var2-tabs").replaceWith("<span></span>");
        $(".printVar2-tabs span").attr("class", "var2-tabs");

        variable2 = $(".variable2-tabs").children("option:selected").val();
        if (variable2 == "Command"){
           var text =  $(".totalCommand-tabs").text();
           var totalCommand = parseFloat(text);
           if(totalCommand >= 0){
            $(".var2-tabs").replaceWith("<span>"+totalCommand+"</span>");
            $(".printVar2-tabs span").attr("class", "var2-tabs");
            return totalCommand;
           } else {
           $(".var2-tabs").replaceWith("<span> la commande n'a pas été calculée</span>");
           $(".printVar2-tabs span").attr("class", "var2-tabs");
           }
    
        } else if (variable2 == "Recipe"){
            var text = $(".totalRecipe-tabs").text();
            var totalRecipe = parseFloat(text);
            if(totalRecipe >= 0){
                $(".var2-tabs").replaceWith("<span>"+totalRecipe+"</span>");
                $(".printVar2-tabs span").attr("class", "var2-tabs");
                return totalRecipe;
            } else{
            $(".var2-tabs").replaceWith("<span> la recette de base n'a pas été calculée </span>");
            $(".printVar2-tabs span").attr("class", "var2-tabs");
            }
        }
    }
    
    
    
    function getCoefTabs(){
        $(".totalProcess-tabs").replaceWith("<span></span>");
        $(".result-process-tabs span:nth-child(2)").attr("class", "totalProcess-tabs");
        $(".coef-tabs").replaceWith("<span></span>");
        $(".printCoef-tabs span").attr("class", "coef-tabs");
        Good1 =  $(".variable1-tabs").children("option:selected").val();
        GoodOp =  $(".operator-tabs").children("option:selected").val();
        Good2 = $(".variable2-tabs").children("option:selected").val();
        var1 = getVariable1Tabs();
        var2 = getVariable2Tabs();
        op = getOperatorTabs();
        if( var1 == undefined || var2 == undefined || op == undefined ){
            $(".coef-tabs").replaceWith("<span></span>")
            $(".printCoef-tabs span").attr("class", "coef-tabs");
        } else {
            if(Good1 == "Command" && GoodOp == "divide" && Good2 == "Recipe"){
               res = var1 / var2;
               res = res.toFixed(3);
               $(".coef-tabs").replaceWith("<span>"+res+"</span>")
               $(".printCoef-tabs span").attr("class", "coef-tabs");  
               return res;
            } else {
                res = "erreur";
                $(".coef-tabs").replaceWith("<span></span>")
                $(".printCoef-tabs span").attr("class", "coef-tabs");  
                return res;
            }
        }
    }
    

    function totalProcessTabs(){
        coef = getCoefTabs();
       if(isNaN(coef)){
           return;
       } else {
          
    
           var flour = myflourTabs;
           if(isNaN(flour)){
               flour = 0;
           }
    
           var water = mywaterTabs;
           if(isNaN(water)){
               water = 0;
           }
    
           var salt = mysaltTabs;
           if(isNaN(salt)){
               salt = 0;
           }
    
           var yeast = myyeastTabs;
           if(isNaN(yeast)){
               yeast = 0;
           }
    
           var dough = mydoughTabs;
           if(isNaN(dough)){
               dough = 0;
           }
    
           $(".totalFlour-tabs").replaceWith("<span></span");
           $(".result-flour-tabs span").attr("class", "totalFlour-tabs");
           var flourFinal = flour * coef; 
           var flourFinal = flourFinal.toFixed(3);
           var flourFinal = parseFloat(flourFinal);
           $(".totalFlour-tabs").replaceWith("<span>"+flourFinal+"</span");
           $(".result-flour-tabs span").attr("class", "totalFlour-tabs");


           $(".totalWater-tabs").replaceWith("<span></span");
           $(".result-water-tabs span").attr("class", "totalWater-tabs");
           var waterFinal = water * coef; 
           var waterFinal = waterFinal.toFixed(3);
           var waterFinal = parseFloat(waterFinal);
           $(".totalWater-tabs").replaceWith("<span>"+waterFinal+"</span");
           $(".result-water-tabs span").attr("class", "totalWater-tabs");
    
           $("totalSalt-tabs").replaceWith("<span></span");
           $(".result-salt-tabs span").attr("class", "totalSalt-tabs");
           var saltFinal = salt * coef; 
           var saltFinal = saltFinal.toFixed(3);
           var saltFinal = parseFloat(saltFinal);
           $(".totalSalt-tabs").replaceWith("<span>"+saltFinal+"</span");
           $(".result-salt-tabs span").attr("class", "totalSalt-tabs");
    
           $(".totalYeast-tabs").replaceWith("<span></span");
           $(".result-yeast-tabs span").attr("class", "totalYeast-tabs");
           var yeastFinal = yeast * coef; 
           var yeastFinal = yeastFinal.toFixed(3);
           var yeastFinal = parseFloat(yeastFinal);
           $(".totalYeast-tabs").replaceWith("<span>"+yeastFinal+"</span");
           $(".result-yeast-tabs span").attr("class", "totalYeast-tabs");
    
           $(".totalDough-tabs").replaceWith("<span></span");
           $(".result-dough-tabs span").attr("class", "totalDough-tabs");
           var doughFinal = dough * coef; 
           var doughFinal = doughFinal.toFixed(3);
           var doughFinal = parseFloat(doughFinal);
           $(".totalDough-tabs").replaceWith("<span>"+doughFinal+"</span");
           $(".result-dough-tabs span").attr("class", "totalDough-tabs");
    
           var res = flourFinal + waterFinal + saltFinal + yeastFinal + doughFinal;
           var res = res.toFixed(3);
           $(".totalProcess-tabs").replaceWith("<span>"+res+"</span>");
           $(".result-process-tabs span:nth-child(2)").attr("class", "totalProcess");
       }
    }

// SVG
    function flourSVGTabs(){
        if(myflourTabs <= 0){
            $(".flourSVGLarge").removeClass("checked");
        } else if (myflourTabs > 0){
            $(".flourSVGLarge").addClass("checked");
        }
    }

    function waterSVGTabs(){
        if(mywaterTabs <= 0){
            $(".waterSVGLarge").removeClass("checked");
        } else if (mywaterTabs > 0){
            $(".waterSVGLarge").addClass("checked");
        }
    }

    function saltSVGTabs(){
        if(mysaltTabs <= 0){
            $(".saltSVGLarge").removeClass("checked");
        } else if (mysaltTabs > 0){
            $(".saltSVGLarge").addClass("checked");
        }
    }

    function yeastSVGTabs(){
        if(myyeastTabs <= 0){
            $(".yeastSVGLarge").removeClass("checked");
        } else if (myyeastTabs > 0){
            $(".yeastSVGLarge").addClass("checked");
        }
    }

    function doughSVGTabs(){
        if(mydoughTabs <= 0){
            $(".doughSVGLarge").removeClass("checked");
        } else if (mydoughTabs > 0){
            $(".doughSVGLarge").addClass("checked");
        }
    }


//EVENT LISTENERS
// My Command

// bread selectors 

   $(".type1-tabs").change(function(){
       getBreadTabs(1,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });

   $(".type2-tabs").change(function(){
       getBreadTabs(2,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });

   $(".type3-tabs").change(function(){
       getBreadTabs(3,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });

   $(".type4-tabs").change(function(){
       getBreadTabs(4,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });

   $(".type5-tabs").change(function(){
       getBreadTabs(5,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });

   $(".type6-tabs").change(function(){
       getBreadTabs(6,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });


   //  quantity

   $(".qty1-tabs").change(function(){
       getBreadTabs(1,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();  
   }); 
   $(".plus1-tabs").click(function(){
       getBreadTabs(1,1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });
   $(".minus1-tabs").click(function(){
       getBreadTabs(1,-1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });


   $(".qty2-tabs").change(function(){
       getBreadTabs(2,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   }); 
   $(".plus2-tabs").click(function(){
       getBreadTabs(2,1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });
   $(".minus2-tabs").click(function(){
       getBreadTabs(2,-1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });


   $(".qty3-tabs").change(function(){
       getBreadTabs(3,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();     
   }); 
   $(".plus3-tabs").click(function(){
       getBreadTabs(3,1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });
   $(".minus3-tabs").click(function(){
       getBreadTabs(3,-1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });


   $(".qty4-tabs").change(function(){
       getBreadTabs(4,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   }); 
   $(".plus4-tabs").click(function(){
       getBreadTabs(4,1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });
   $(".minus4-tabs").click(function(){
       getBreadTabs(4,-1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });


   $(".qty5-tabs").change(function(){
       getBread(5,0);
       getVariable1();
       getCoef();
       totalProcess();
   }); 
   $(".plus5-tabs").click(function(){
       getBreadTabs(5,1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });
   $(".minus5-tabs").click(function(){
       getBreadTabs(5,-1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });


   $(".qty6-tabs").change(function(){
       getBreadTabs(6,0);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   }); 
   $(".plus6-tabs").click(function(){
       getBreadTabs(6,1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });
   $(".minus6-tabs").click(function(){
       getBreadTabs(6,-1);
       getVariable1Tabs();
       getCoefTabs();
       totalProcessTabs();
   });


// My Recipe 

$(".qtyFlour-tabs").change(function(){
    totalRecipeTabs(0,1);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    flourSVGTabs();
});
$(".plusFlour-tabs").click(function(){
    totalRecipeTabs(0.1,1); 
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    flourSVGTabs();         
});
$(".minusFlour-tabs").click(function(){
    totalRecipeTabs(-0.1,1);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    flourSVGTabs();
});


$(".qtyWater-tabs").change(function(){
    totalRecipeTabs(0,2);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    waterSVGTabs();
});
$(".plusWater-tabs").click(function(){
    totalRecipeTabs(0.1,2);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    waterSVGTabs();
});
$(".minusWater-tabs").click(function(){
    totalRecipeTabs(-0.1,2);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    waterSVGTabs();
});


$(".qtySalt-tabs").change(function(){
    totalRecipeTabs(0,3);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    saltSVGTabs();
});
$(".plusSalt-tabs").click(function(){
    totalRecipeTabs(0.1,3);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    saltSVGTabs();
});
$(".minusSalt-tabs").click(function(){
    totalRecipeTabs(-0.1,3);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    saltSVGTabs();
});


$(".qtyYeast-tabs").change(function(){
    totalRecipeTabs(0,4);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    yeastSVGTabs();
});
$(".plusYeast-tabs").click(function(){
    totalRecipeTabs(0.1,4);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    yeastSVGTabs();
});
$(".minusYeast-tabs").click(function(){
    totalRecipeTabs(-0.1,4);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    yeastSVGTabs();
});


$(".qtyDough-tabs").change(function(){
    totalRecipeTabs(0,5);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    doughSVGTabs();
});
$(".plusDough-tabs").click(function(){
    totalRecipeTabs(0.1,5);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    doughSVGTabs();
});
$(".minusDough-tabs").click(function(){
    totalRecipeTabs(-0.1,5);
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
    doughSVGTabs();
});


// My Process

$(".variable1-tabs").change(function(){
    getVariable1Tabs();
    getCoefTabs();
    totalProcessTabs();
});

$(".operator-tabs").change(function(){
    getOperatorTabs();
    getCoefTabs();
    totalProcessTabs();
});

$(".variable2-tabs").change(function(){
    getVariable2Tabs();
    getCoefTabs();
    totalProcessTabs();
});





/* ------------------------- COLLECTION --------------------------------*/

myflourCollection = 0;
mywaterCollection = 0;
mysaltCollection = 0;
myyeastCollection = 0;
mydoughCollection = 0;

// FUNCTIONS 
// My Command 
function getBreadWeightCollection(id){
var selectedBread = $(".type"+id+"-collection").children("option:selected").val();

   if(selectedBread == "normal"){
       var getBreadWeight = 550;
       $('.weight'+id+'-collection').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-collection span:first').attr("class","weight"+id+"-collection");  
        return getBreadWeight;
   
   } else if (selectedBread == "bastard"){
       var getBreadWeight = 350;
       $('.weight'+id+'-collection').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-collection span:first').attr("class", "weight"+id+"-collection");  
       return getBreadWeight;

   } else if (selectedBread == "baguetteH"){
       var getBreadWeight = 350;
       $('.weight'+id+'-collection').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-collection span:first').attr("class","weight"+id+'-collection');  
       return getBreadWeight;

   } else if (selectedBread == "baguetteL"){
       var getBreadWeight = 300;
       $('.weight'+id+'-collection').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-collection span:first').attr("class","weight"+id+"-collection");  
       return getBreadWeight;

   } else if (selectedBread == "ficelle"){
       var getBreadWeight = 150;
       $('.weight'+id+'-collection').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-collection span:first').attr("class", "weight"+id+'-collection');  
       return getBreadWeight;

   } else if (selectedBread == "scone"){
       var getBreadWeight = 75;
       $('.weight'+id+'-collection').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-collection span:first').attr("class", "weight"+id+'-collection');  
       return getBreadWeight;
   
   } else if (selectedBread == "" || selectedBread == null){
       var getBreadWeight = "unselected";
       return getBreadWeight; 
   }

}   

function getBreadQuantityCollection(id, counter){
   var getText = $(".qty"+id+'-collection').val();
   getBreadQuantity = parseInt(getText);
   getBreadQuantity = getBreadQuantity + counter;
   return getBreadQuantity;
}


function getBreadCollection(id, counter){
   var bread = $(".bread"+id+'-collection');
   var weight = getBreadWeightCollection(id);
   var qty = getBreadQuantityCollection(id, counter);

   if  (weight == "unselected" && (qty <0 || isNaN(qty))){
       bread.replaceWith("<span> Choisir un Pain ! <br> Ajouter une quantité positive !</span>");
       $(".printBread"+id+"-collection span:first").attr("class", "bread"+id+'-collection');

   } else if (weight == "unselected"){
       bread.replaceWith("<span> Choisir un pain ! </span>");
       $(".printBread"+id+"-collection span:first").attr("class", "bread"+id+'-collection');

   } else if (qty < 0 || isNaN(qty)){
       bread.replaceWith("<span> Ajouter une quantité positive ! </span>");
       $(".printBread"+id+"-collection span:first").attr("class", "bread"+id+"-collection");

   } else {
       var total =  weight*qty;
       if(total < 0){
           total = 0;
       } else {
       bread.replaceWith("<span>"+total+"</span>");
       $(".printBread"+id+"-collection span:first").attr("class", "bread"+id+'-collection');
       totalCommandCollection();
       return total;
       }
   }
} 


function totalCommandCollection(){
   $(".totalCommand-collection").replaceWith("<span></span>");
   $(".result-command-collection span:nth-child(2)").attr("class","totalCommand-collection");

   var txt1 = $(".bread1-collection").text();
   var res1 = parseInt(txt1);

   var txt2 = $('.bread2-collection').text();
   var res2 = parseInt(txt2);

   var txt3 = $('.bread3-collection').text();
   var res3 = parseInt(txt3);

   var txt4 = $('.bread4-collection').text();
   var res4 = parseInt(txt4);

   var txt5 = $('.bread5-collection').text();
   var res5 = parseInt(txt5);

   var txt6 = $('.bread6-collection').text();
   var res6 = parseInt(txt6);

   if (isNaN(res1)){
       res1 = 0;
   }
   if (isNaN(res2)){
       res2 = 0;
   }
   if (isNaN(res3)){
       res3 = 0;
   }
   if (isNaN(res4)){
       res4 = 0;
   }
   if (isNaN(res5)){
       res5 = 0;
   }
   if (isNaN(res6)){
       res6 = 0;
   }
 
   res = (res1 + res2 + res3 + res4 + res5 + res6)/1000;

   $(".totalCommand-collection").replaceWith("<span>"+res+"</span>");
   $(".result-command-collection span:nth-child(2)").attr("class","totalCommand-collection");
}



//MyRecipe 
function totalRecipeCollection(counter, id){
$(".totalRecipe-collection").replaceWith("<span></span");
$(".result-recipe-collection span:nth-child(2)").attr("class", "totalRecipe-collection");

var flour = $(".qtyFlour-collection").val();
myflourCollection = parseFloat(flour);
myflourCollection = myflourCollection/1000;
var water = $(".qtyWater-collection").val();
mywaterCollection = parseFloat(water);
mywaterCollection = mywaterCollection/1000;
var salt = $(".qtySalt-collection").val();
mysaltCollection = parseFloat(salt);
mysaltCollection = mysaltCollection/1000;
var yeast = $(".qtyYeast-collection").val();
myyeastCollection = parseFloat(yeast);
myyeastCollection = myyeastCollection/1000;
var dough= $(".qtyDough-collection").val();
mydoughCollection = parseFloat(dough);
mydoughCollection = mydoughCollection/1000;


if (myflourCollection < 0 || isNaN(myflourCollection)){
    myflourCollection = 0;
}
if (mywaterCollection < 0 || isNaN(mywaterCollection)){
    mywaterCollection = 0;
}
if (mysaltCollection < 0 || isNaN(mysaltCollection)){
    mysaltCollection = 0;
}
if (myyeastCollection < 0 || isNaN(myyeastCollection)){
    myyeastCollection = 0;
}
if (mydoughCollection < 0 || isNaN(mydoughCollection)){
    mydoughCollection = 0;
}


if( id == 1){
    myflourCollection = myflourCollection + counter;
}
if( id == 2){
    mywaterCollection = mywaterCollection + counter;
}
if( id == 3){
    mysaltCollection = mysaltCollection + counter;
}
if(id == 4){
    myyeastCollection = myyeastCollection + counter;
}
if(id == 5){
    mydoughCollection = mydoughCollection + counter;
}

var res = myflourCollection + mywaterCollection + mysaltCollection + myyeastCollection + mydoughCollection;
var res = res.toFixed(2);

if(res <0 ){
    res = 0;
}

$(".totalRecipe-collection").replaceWith("<span>"+res+"</span>");
$(".result-recipe-collection span:nth-child(2)").attr("class", "totalRecipe-collection");
}




// My Process

function getVariable1Collection(){
    $(".var1-collection").replaceWith("<span></span>");
    $(".printVar1-collection span").attr("class", "var1-collection");

    variable1 = $(".variable1-collection").children("option:selected").val();

    if (variable1 == "Command"){
       var text =  $(".totalCommand-collection").text();
       var totalCommand = parseFloat(text);
       if(totalCommand >= 0){
        $(".var1-collection").replaceWith("<span>"+totalCommand+"</span>");
        $(".printVar1-collection span").attr("class", "var1-collection");
        return totalCommand;
       } else {
       $(".var1-collection").replaceWith("<span> la commande n'a pas été calculée</span>");
       $(".printVar1-collection span").attr("class", "var1-collection");
       }

    } else if (variable1 == "Recipe"){
        var text = $(".totalRecipe-collection").text();
        var totalRecipe = parseFloat(text);
        if(totalRecipe >= 0){
            $(".var1-collection").replaceWith("<span>"+totalRecipe+"</span>");
            $(".printVar1-collection span").attr("class", "var1-collection");
            return totalRecipe;
        } else{
        $(".var1-collection").replaceWith("<span> la recette de base n'a pas été calculée </span>");
        $(".printVar1-collection span").attr("class", "var1-collection");
        }
    }
}


function getOperatorCollection(){
    var operator = $(".operator-collection").children("option:selected").val();

    if(operator == "multiply"){
        return operator 
    } else if (operator == "divide"){
        return operator;
    } else 
        return;
}



function getVariable2Collection(){
    $(".var2-collection").replaceWith("<span></span>");
    $(".printVar2-collection span").attr("class", "var2-collection");

    variable2 = $(".variable2-collection").children("option:selected").val();
    if (variable2 == "Command"){
       var text =  $(".totalCommand-collection").text();
       var totalCommand = parseFloat(text);
       if(totalCommand >= 0){
        $(".var2-collection").replaceWith("<span>"+totalCommand+"</span>");
        $(".printVar2-collection span").attr("class", "var2-collection");
        return totalCommand;
       } else {
       $(".var2-collection").replaceWith("<span> la commande n'a pas été calculée</span>");
       $(".printVar2-collection span").attr("class", "var2-collection");
       }

    } else if (variable2 == "Recipe"){
        var text = $(".totalRecipe-collection").text();
        var totalRecipe = parseFloat(text);
        if(totalRecipe >= 0){
            $(".var2-collection").replaceWith("<span>"+totalRecipe+"</span>");
            $(".printVar2-collection span").attr("class", "var2-collection");
            return totalRecipe;
        } else{
        $(".var2-collection").replaceWith("<span> la recette de base n'a pas été calculée </span>");
        $(".printVar2-collection span").attr("class", "var2-collection");
        }
    }
}



function getCoefCollection(){
    $(".totalProcess-collection").replaceWith("<span></span>");
    $(".result-process-collection span:nth-child(2)").attr("class", "totalProcess-collection");
    $(".coef-collection").replaceWith("<span></span>");
    $(".printCoef-collection span").attr("class", "coef-collection");
    Good1 =  $(".variable1-collection").children("option:selected").val();
    GoodOp =  $(".operator-collection").children("option:selected").val();
    Good2 = $(".variable2-collection").children("option:selected").val();
    var1 = getVariable1Collection();
    var2 = getVariable2Collection();
    op = getOperatorCollection();
    if( var1 == undefined || var2 == undefined || op == undefined ){
        $(".coef-collection").replaceWith("<span></span>")
        $(".printCoef-collection span").attr("class", "coef-collection");
    } else {
        if(Good1 == "Command" && GoodOp == "divide" && Good2 == "Recipe"){
           res = var1 / var2;
           res = res.toFixed(3);
           $(".coef-collection").replaceWith("<span>"+res+"</span>")
           $(".printCoef-collection span").attr("class", "coef-collection");  
           return res;
        } else {
            res = "erreur";
            $(".coef-collection").replaceWith("<span></span>")
            $(".printCoef-collection span").attr("class", "coef-collection");  
            return res;
        }
    }
}


function totalProcessCollection(){
    coef = getCoefCollection();
   if(isNaN(coef)){
       return;
   } else {
      

       var flour = myflourCollection;
       if(isNaN(flour)){
           flour = 0;
       }

       var water = mywaterCollection;
       if(isNaN(water)){
           water = 0;
       }

       var salt = mysaltCollection;
       if(isNaN(salt)){
           salt = 0;
       }

       var yeast = myyeastCollection;
       if(isNaN(yeast)){
           yeast = 0;
       }

       var dough = mydoughCollection;
       if(isNaN(dough)){
           dough = 0;
       }

       $(".totalFlour-collection").replaceWith("<span></span");
       $(".result-flour-collection span").attr("class", "totalFlour-collection");
       var flourFinal = flour * coef; 
       var flourFinal = flourFinal.toFixed(3);
       var flourFinal = parseFloat(flourFinal);
       $(".totalFlour-collection").replaceWith("<span>"+flourFinal+"</span");
       $(".result-flour-collection span").attr("class", "totalFlour-collection");


       $(".totalWater-collection").replaceWith("<span></span");
       $(".result-water-collection span").attr("class", "totalWater-collection");
       var waterFinal = water * coef; 
       var waterFinal = waterFinal.toFixed(3);
       var waterFinal = parseFloat(waterFinal);
       $(".totalWater-collection").replaceWith("<span>"+waterFinal+"</span");
       $(".result-water-collection span").attr("class", "totalWater-collection");

       $("totalSalt-collection").replaceWith("<span></span");
       $(".result-salt-collection span").attr("class", "totalSalt-collection");
       var saltFinal = salt * coef; 
       var saltFinal = saltFinal.toFixed(3);
       var saltFinal = parseFloat(saltFinal);
       $(".totalSalt-collection").replaceWith("<span>"+saltFinal+"</span");
       $(".result-salt-collection span").attr("class", "totalSalt-collection");

       $(".totalYeast-collection").replaceWith("<span></span");
       $(".result-yeast-collection span").attr("class", "totalYeast-collection");
       var yeastFinal = yeast * coef; 
       var yeastFinal = yeastFinal.toFixed(3);
       var yeastFinal = parseFloat(yeastFinal);
       $(".totalYeast-collection").replaceWith("<span>"+yeastFinal+"</span");
       $(".result-yeast-collection span").attr("class", "totalYeast-collection");

       $(".totalDough-collection").replaceWith("<span></span");
       $(".result-dough-collection span").attr("class", "totalDough-collection");
       var doughFinal = dough * coef; 
       var doughFinal = doughFinal.toFixed(3);
       var doughFinal = parseFloat(doughFinal);
       $(".totalDough-collection").replaceWith("<span>"+doughFinal+"</span");
       $(".result-dough-collection span").attr("class", "totalDough-collection");

       var res = flourFinal + waterFinal + saltFinal + yeastFinal + doughFinal;
       var res = res.toFixed(3);
       $(".totalProcess-collection").replaceWith("<span>"+res+"</span>");
       $(".result-process-collection span:nth-child(2)").attr("class", "totalProcess");
   }
}

// SVG
function flourSVGCollection(){
    if(myflourCollection <= 0){
        $(".flourSVGMed").removeClass("checked");
    } else if (myflourCollection > 0){
        $(".flourSVGMed").addClass("checked");
    }
}

function waterSVGCollection(){
    if(mywaterCollection <= 0){
        $(".waterSVGMed").removeClass("checked");
    } else if (mywaterCollection > 0){
        $(".waterSVGMed").addClass("checked");
    }
}

function saltSVGCollection(){
    if(mysaltCollection <= 0){
        $(".saltSVGMed").removeClass("checked");
    } else if (mysaltCollection > 0){
        $(".saltSVGMed").addClass("checked");
    }
}

function yeastSVGCollection(){
    if(myyeastCollection <= 0){
        $(".yeastSVGMed").removeClass("checked");
    } else if (myyeastCollection > 0){
        $(".yeastSVGMed").addClass("checked");
    }
}

function doughSVGCollection(){
    if(mydoughCollection <= 0){
        $(".doughSVGMed").removeClass("checked");
    } else if (mydoughCollection > 0){
        $(".doughSVGMed").addClass("checked");
    }
}


//EVENT LISTENERS
// My Command

// bread selectors 

$(".type1-collection").change(function(){
   getBreadCollection(1,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});

$(".type2-collection").change(function(){
   getBreadCollection(2,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});

$(".type3-collection").change(function(){
   getBreadCollection(3,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});

$(".type4-collection").change(function(){
   getBreadCollection(4,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});

$(".type5-collection").change(function(){
   getBreadCollection(5,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});

$(".type6-collection").change(function(){
   getBreadCollection(6,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});


//  quantity

$(".qty1-collection").change(function(){
   getBreadCollection(1,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();  
}); 
$(".plus1-collection").click(function(){
   getBreadCollection(1,1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});
$(".minus1-collection").click(function(){
   getBreadCollection(1,-1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});


$(".qty2-collection").change(function(){
   getBreadCollection(2,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
}); 
$(".plus2-collection").click(function(){
   getBreadCollection(2,1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});
$(".minus2-collection").click(function(){
   getBreadCollection(2,-1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});


$(".qty3-collection").change(function(){
   getBreadCollection(3,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();     
}); 
$(".plus3-collection").click(function(){
   getBreadCollection(3,1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});
$(".minus3-collection").click(function(){
   getBreadCollection(3,-1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});


$(".qty4-collection").change(function(){
   getBreadCollection(4,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
}); 
$(".plus4-collection").click(function(){
   getBreadCollection(4,1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});
$(".minus4-collection").click(function(){
   getBreadCollection(4,-1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});


$(".qty5-collection").change(function(){
   getBread(5,0);
   getVariable1();
   getCoef();
   totalProcess();
}); 
$(".plus5-collection").click(function(){
   getBreadCollection(5,1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});
$(".minus5-collection").click(function(){
   getBreadCollection(5,-1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});


$(".qty6-collection").change(function(){
   getBreadCollection(6,0);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
}); 
$(".plus6-collection").click(function(){
   getBreadCollection(6,1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});
$(".minus6-collection").click(function(){
   getBreadCollection(6,-1);
   getVariable1Collection();
   getCoefCollection();
   totalProcessCollection();
});


// My Recipe 

$(".qtyFlour-collection").change(function(){
totalRecipeCollection(0,1);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
flourSVGCollection();
});
$(".plusFlour-collection").click(function(){
totalRecipeCollection(0.1,1); 
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
flourSVGCollection();         
});
$(".minusFlour-collection").click(function(){
totalRecipeCollection(-0.1,1);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
flourSVGCollection();
});


$(".qtyWater-collection").change(function(){
totalRecipeCollection(0,2);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
waterSVGCollection();
});
$(".plusWater-collection").click(function(){
totalRecipeCollection(0.1,2);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
waterSVGCollection();
});
$(".minusWater-collection").click(function(){
totalRecipeCollection(-0.1,2);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
waterSVGCollection();
});


$(".qtySalt-collection").change(function(){
totalRecipeCollection(0,3);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
saltSVGCollection();
});
$(".plusSalt-collection").click(function(){
totalRecipeCollection(0.1,3);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
saltSVGCollection();
});
$(".minusSalt-collection").click(function(){
totalRecipeCollection(-0.1,3);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
saltSVGCollection();
});


$(".qtyYeast-collection").change(function(){
totalRecipeCollection(0,4);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
yeastSVGCollection();
});
$(".plusYeast-collection").click(function(){
totalRecipeCollection(0.1,4);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
yeastSVGCollection();
});
$(".minusYeast-collection").click(function(){
totalRecipeCollection(-0.1,4);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
yeastSVGCollection();
});


$(".qtyDough-collection").change(function(){
totalRecipeCollection(0,5);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
doughSVGCollection();
});
$(".plusDough-collection").click(function(){
totalRecipeCollection(0.1,5);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
doughSVGCollection();
});
$(".minusDough-collection").click(function(){
totalRecipeCollection(-0.1,5);
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
doughSVGCollection();
});


// My Process

$(".variable1-collection").change(function(){
getVariable1Collection();
getCoefCollection();
totalProcessCollection();
});

$(".operator-collection").change(function(){
getOperatorCollection();
getCoefCollection();
totalProcessCollection();
});

$(".variable2-collection").change(function(){
getVariable2Collection();
getCoefCollection();
totalProcessCollection();
});






/* ------------------------- ACCORDION --------------------------------*/

myflourAccordion = 0;
mywaterAccordion = 0;
mysaltAccordion = 0;
myyeastAccordion = 0;
mydoughAccordion = 0;

// FUNCTIONS 
// My Command 
function getBreadWeightAccordion(id){
var selectedBread = $(".type"+id+"-accordion").children("option:selected").val();

   if(selectedBread == "normal"){
       var getBreadWeight = 550;
       $('.weight'+id+'-accordion').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-accordion span:first').attr("class","weight"+id+"-accordion");  
        return getBreadWeight;
   
   } else if (selectedBread == "bastard"){
       var getBreadWeight = 350;
       $('.weight'+id+'-accordion').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-accordion span:first').attr("class", "weight"+id+"-accordion");  
       return getBreadWeight;

   } else if (selectedBread == "baguetteH"){
       var getBreadWeight = 350;
       $('.weight'+id+'-accordion').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-accordion span:first').attr("class","weight"+id+'-accordion');  
       return getBreadWeight;

   } else if (selectedBread == "baguetteL"){
       var getBreadWeight = 300;
       $('.weight'+id+'-accordion').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-accordion span:first').attr("class","weight"+id+"-accordion");  
       return getBreadWeight;

   } else if (selectedBread == "ficelle"){
       var getBreadWeight = 150;
       $('.weight'+id+'-accordion').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-accordion span:first').attr("class", "weight"+id+'-accordion');  
       return getBreadWeight;

   } else if (selectedBread == "scone"){
       var getBreadWeight = 75;
       $('.weight'+id+'-accordion').replaceWith("<span>"+getBreadWeight+"</span>");
       $('.printWeight'+id+'-accordion span:first').attr("class", "weight"+id+'-accordion');  
       return getBreadWeight;
   
   } else if (selectedBread == "" || selectedBread == null){
       var getBreadWeight = "unselected";
       return getBreadWeight; 
   }

}   

function getBreadQuantityAccordion(id, counter){
   var getText = $(".qty"+id+'-accordion').val();
   getBreadQuantity = parseInt(getText);
   getBreadQuantity = getBreadQuantity + counter;
   return getBreadQuantity;
}


function getBreadAccordion(id, counter){
   var bread = $(".bread"+id+'-accordion');
   var weight = getBreadWeightAccordion(id);
   var qty = getBreadQuantityAccordion(id, counter);

   if  (weight == "unselected" && (qty <0 || isNaN(qty))){
       bread.replaceWith("<span> Choisir un Pain ! <br> Ajouter une quantité positive !</span>");
       $(".printBread"+id+"-accordion span:first").attr("class", "bread"+id+'-accordion');

   } else if (weight == "unselected"){
       bread.replaceWith("<span> Choisir un pain ! </span>");
       $(".printBread"+id+"-accordion span:first").attr("class", "bread"+id+'-accordion');

   } else if (qty < 0 || isNaN(qty)){
       bread.replaceWith("<span> Ajouter une quantité positive ! </span>");
       $(".printBread"+id+"-accordion span:first").attr("class", "bread"+id+"-accordion");

   } else {
       var total =  weight*qty;
       if(total < 0){
           total = 0;
       } else {
       bread.replaceWith("<span>"+total+"</span>");
       $(".printBread"+id+"-accordion span:first").attr("class", "bread"+id+'-accordion');
       totalCommandAccordion();
       return total;
       }
   }
} 


function totalCommandAccordion(){
   $(".totalCommand-accordion").replaceWith("<span></span>");
   $(".result-command-accordion span:nth-child(2)").attr("class","totalCommand-accordion");

   var txt1 = $(".bread1-accordion").text();
   var res1 = parseInt(txt1);

   var txt2 = $('.bread2-accordion').text();
   var res2 = parseInt(txt2);

   var txt3 = $('.bread3-accordion').text();
   var res3 = parseInt(txt3);

   var txt4 = $('.bread4-accordion').text();
   var res4 = parseInt(txt4);

   var txt5 = $('.bread5-accordion').text();
   var res5 = parseInt(txt5);

   var txt6 = $('.bread6-accordion').text();
   var res6 = parseInt(txt6);

   if (isNaN(res1)){
       res1 = 0;
   }
   if (isNaN(res2)){
       res2 = 0;
   }
   if (isNaN(res3)){
       res3 = 0;
   }
   if (isNaN(res4)){
       res4 = 0;
   }
   if (isNaN(res5)){
       res5 = 0;
   }
   if (isNaN(res6)){
       res6 = 0;
   }
 
   res = (res1 + res2 + res3 + res4 + res5 + res6)/1000;

   $(".totalCommand-accordion").replaceWith("<span>"+res+"</span>");
   $(".result-command-accordion span:nth-child(2)").attr("class","totalCommand-accordion");
}



//MyRecipe 
function totalRecipeAccordion(counter, id){
$(".totalRecipe-accordion").replaceWith("<span></span");
$(".result-recipe-accordion span:nth-child(2)").attr("class", "totalRecipe-accordion");

var flour = $(".qtyFlour-accordion").val();
myflourAccordion = parseFloat(flour);
myflourAccordion = myflourAccordion/1000;
var water = $(".qtyWater-accordion").val();
mywaterAccordion = parseFloat(water);
mywaterAccordion = mywaterAccordion/1000;
var salt = $(".qtySalt-accordion").val();
mysaltAccordion = parseFloat(salt);
mysaltAccordion = mysaltAccordion/1000;
var yeast = $(".qtyYeast-accordion").val();
myyeastAccordion = parseFloat(yeast);
myyeastAccordion = myyeastAccordion/1000;
var dough= $(".qtyDough-accordion").val();
mydoughAccordion = parseFloat(dough);
mydoughAccordion = mydoughAccordion/1000;


if (myflourAccordion < 0 || isNaN(myflourAccordion)){
    myflourAccordion = 0;
}
if (mywaterAccordion < 0 || isNaN(mywaterAccordion)){
    mywaterAccordion = 0;
}
if (mysaltAccordion < 0 || isNaN(mysaltAccordion)){
    mysaltAccordion = 0;
}
if (myyeastAccordion < 0 || isNaN(myyeastAccordion)){
    myyeastAccordion = 0;
}
if (mydoughAccordion < 0 || isNaN(mydoughAccordion)){
    mydoughAccordion = 0;
}


if( id == 1){
    myflourAccordion = myflourAccordion + counter;
}
if( id == 2){
    mywaterAccordion = mywaterAccordion + counter;
}
if( id == 3){
    mysaltAccordion = mysaltAccordion + counter;
}
if(id == 4){
    myyeastAccordion = myyeastAccordion + counter;
}
if(id == 5){
    mydoughAccordion = mydoughAccordion + counter;
}

var res = myflourAccordion + mywaterAccordion + mysaltAccordion + myyeastAccordion + mydoughAccordion;
var res = res.toFixed(2);

if(res <0 ){
    res = 0;
}

$(".totalRecipe-accordion").replaceWith("<span>"+res+"</span>");
$(".result-recipe-accordion span:nth-child(2)").attr("class", "totalRecipe-accordion");
}




// My Process

function getVariable1Accordion(){
    $(".var1-accordion").replaceWith("<span></span>");
    $(".printVar1-accordion span").attr("class", "var1-accordion");

    variable1 = $(".variable1-accordion").children("option:selected").val();

    if (variable1 == "Command"){
       var text =  $(".totalCommand-accordion").text();
       var totalCommand = parseFloat(text);
       if(totalCommand >= 0){
        $(".var1-accordion").replaceWith("<span>"+totalCommand+"</span>");
        $(".printVar1-accordion span").attr("class", "var1-accordion");
        return totalCommand;
       } else {
       $(".var1-accordion").replaceWith("<span> la commande n'a pas été calculée</span>");
       $(".printVar1-accordion span").attr("class", "var1-accordion");
       }

    } else if (variable1 == "Recipe"){
        var text = $(".totalRecipe-accordion").text();
        var totalRecipe = parseFloat(text);
        if(totalRecipe >= 0){
            $(".var1-accordion").replaceWith("<span>"+totalRecipe+"</span>");
            $(".printVar1-accordion span").attr("class", "var1-accordion");
            return totalRecipe;
        } else{
        $(".var1-accordion").replaceWith("<span> la recette de base n'a pas été calculée </span>");
        $(".printVar1-accordion span").attr("class", "var1-accordion");
        }
    }
}


function getOperatorAccordion(){
    var operator = $(".operator-accordion").children("option:selected").val();

    if(operator == "multiply"){
        return operator 
    } else if (operator == "divide"){
        return operator;
    } else 
        return;
}



function getVariable2Accordion(){
    $(".var2-accordion").replaceWith("<span></span>");
    $(".printVar2-accordion span").attr("class", "var2-accordion");

    variable2 = $(".variable2-accordion").children("option:selected").val();
    if (variable2 == "Command"){
       var text =  $(".totalCommand-accordion").text();
       var totalCommand = parseFloat(text);
       if(totalCommand >= 0){
        $(".var2-accordion").replaceWith("<span>"+totalCommand+"</span>");
        $(".printVar2-accordion span").attr("class", "var2-accordion");
        return totalCommand;
       } else {
       $(".var2-accordion").replaceWith("<span> la commande n'a pas été calculée</span>");
       $(".printVar2-accordion span").attr("class", "var2-accordion");
       }

    } else if (variable2 == "Recipe"){
        var text = $(".totalRecipe-accordion").text();
        var totalRecipe = parseFloat(text);
        if(totalRecipe >= 0){
            $(".var2-accordion").replaceWith("<span>"+totalRecipe+"</span>");
            $(".printVar2-accordion span").attr("class", "var2-accordion");
            return totalRecipe;
        } else{
        $(".var2-accordion").replaceWith("<span> la recette de base n'a pas été calculée </span>");
        $(".printVar2-accordion span").attr("class", "var2-accordion");
        }
    }
}



function getCoefAccordion(){
    $(".totalProcess-accordion").replaceWith("<span></span>");
    $(".result-process-accordion span:nth-child(2)").attr("class", "totalProcess-accordion");
    $(".coef-accordion").replaceWith("<span></span>");
    $(".printCoef-accordion span").attr("class", "coef-accordion");
    Good1 =  $(".variable1-accordion").children("option:selected").val();
    GoodOp =  $(".operator-accordion").children("option:selected").val();
    Good2 = $(".variable2-accordion").children("option:selected").val();
    var1 = getVariable1Accordion();
    var2 = getVariable2Accordion();
    op = getOperatorAccordion();
    if( var1 == undefined || var2 == undefined || op == undefined ){
        $(".coef-accordion").replaceWith("<span></span>")
        $(".printCoef-accordion span").attr("class", "coef-accordion");
    } else {
        if(Good1 == "Command" && GoodOp == "divide" && Good2 == "Recipe"){
           res = var1 / var2;
           res = res.toFixed(3);
           $(".coef-accordion").replaceWith("<span>"+res+"</span>")
           $(".printCoef-accordion span").attr("class", "coef-accordion");  
           return res;
        } else {
            res = "erreur";
            $(".coef-accordion").replaceWith("<span></span>")
            $(".printCoef-accordion span").attr("class", "coef-accordion");  
            return res;
        }
    }
}


function totalProcessAccordion(){
    coef = getCoefAccordion();
   if(isNaN(coef)){
       return;
   } else {
      

       var flour = myflourAccordion;
       if(isNaN(flour)){
           flour = 0;
       }

       var water = mywaterAccordion;
       if(isNaN(water)){
           water = 0;
       }

       var salt = mysaltAccordion;
       if(isNaN(salt)){
           salt = 0;
       }

       var yeast = myyeastAccordion;
       if(isNaN(yeast)){
           yeast = 0;
       }

       var dough = mydoughAccordion;
       if(isNaN(dough)){
           dough = 0;
       }

       $(".totalFlour-accordion").replaceWith("<span></span");
       $(".result-flour-accordion span").attr("class", "totalFlour-accordion");
       var flourFinal = flour * coef; 
       var flourFinal = flourFinal.toFixed(3);
       var flourFinal = parseFloat(flourFinal);
       $(".totalFlour-accordion").replaceWith("<span>"+flourFinal+"</span");
       $(".result-flour-accordion span").attr("class", "totalFlour-accordion");


       $(".totalWater-accordion").replaceWith("<span></span");
       $(".result-water-accordion span").attr("class", "totalWater-accordion");
       var waterFinal = water * coef; 
       var waterFinal = waterFinal.toFixed(3);
       var waterFinal = parseFloat(waterFinal);
       $(".totalWater-accordion").replaceWith("<span>"+waterFinal+"</span");
       $(".result-water-accordion span").attr("class", "totalWater-accordion");

       $("totalSalt-accordion").replaceWith("<span></span");
       $(".result-salt-accordion span").attr("class", "totalSalt-accordion");
       var saltFinal = salt * coef; 
       var saltFinal = saltFinal.toFixed(3);
       var saltFinal = parseFloat(saltFinal);
       $(".totalSalt-accordion").replaceWith("<span>"+saltFinal+"</span");
       $(".result-salt-accordion span").attr("class", "totalSalt-accordion");

       $(".totalYeast-accordion").replaceWith("<span></span");
       $(".result-yeast-accordion span").attr("class", "totalYeast-accordion");
       var yeastFinal = yeast * coef; 
       var yeastFinal = yeastFinal.toFixed(3);
       var yeastFinal = parseFloat(yeastFinal);
       $(".totalYeast-accordion").replaceWith("<span>"+yeastFinal+"</span");
       $(".result-yeast-accordion span").attr("class", "totalYeast-accordion");

       $(".totalDough-accordion").replaceWith("<span></span");
       $(".result-dough-accordion span").attr("class", "totalDough-accordion");
       var doughFinal = dough * coef; 
       var doughFinal = doughFinal.toFixed(3);
       var doughFinal = parseFloat(doughFinal);
       $(".totalDough-accordion").replaceWith("<span>"+doughFinal+"</span");
       $(".result-dough-accordion span").attr("class", "totalDough-accordion");

       var res = flourFinal + waterFinal + saltFinal + yeastFinal + doughFinal;
       var res = res.toFixed(3);
       $(".totalProcess-accordion").replaceWith("<span>"+res+"</span>");
       $(".result-process-accordion span:nth-child(2)").attr("class", "totalProcess");
   }
}

// SVG
function flourSVGAccordion(){
    if(myflourAccordion <= 0){
        $(".flourSVGSmall").removeClass("checked");
    } else if (myflourAccordion > 0){
        $(".flourSVGSmall").addClass("checked");
    }
}

function waterSVGAccordion(){
    if(mywaterAccordion <= 0){
        $(".waterSVGSmall").removeClass("checked");
    } else if (mywaterAccordion > 0){
        $(".waterSVGSmall").addClass("checked");
    }
}

function saltSVGAccordion(){
    if(mysaltAccordion <= 0){
        $(".saltSVGSmall").removeClass("checked");
    } else if (mysaltAccordion > 0){
        $(".saltSVGSmall").addClass("checked");
    }
}

function yeastSVGAccordion(){
    if(myyeastAccordion <= 0){
        $(".yeastSVGSmall").removeClass("checked");
    } else if (myyeastAccordion > 0){
        $(".yeastSVGSmall").addClass("checked");
    }
}

function doughSVGAccordion(){
    if(mydoughAccordion <= 0){
        $(".doughSVGSmall").removeClass("checked");
    } else if (mydoughAccordion > 0){
        $(".doughSVGSmall").addClass("checked");
    }
}


//EVENT LISTENERS
// My Command

// bread selectors 

$(".type1-accordion").change(function(){
   getBreadAccordion(1,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});

$(".type2-accordion").change(function(){
   getBreadAccordion(2,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});

$(".type3-accordion").change(function(){
   getBreadAccordion(3,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});

$(".type4-accordion").change(function(){
   getBreadAccordion(4,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});

$(".type5-accordion").change(function(){
   getBreadAccordion(5,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});

$(".type6-accordion").change(function(){
   getBreadAccordion(6,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});


//  quantity

$(".qty1-accordion").change(function(){
   getBreadAccordion(1,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();  
}); 
$(".plus1-accordion").click(function(){
   getBreadAccordion(1,1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});
$(".minus1-accordion").click(function(){
   getBreadAccordion(1,-1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});


$(".qty2-accordion").change(function(){
   getBreadAccordion(2,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
}); 
$(".plus2-accordion").click(function(){
   getBreadAccordion(2,1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});
$(".minus2-accordion").click(function(){
   getBreadAccordion(2,-1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});


$(".qty3-accordion").change(function(){
   getBreadAccordion(3,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();     
}); 
$(".plus3-accordion").click(function(){
   getBreadAccordion(3,1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});
$(".minus3-accordion").click(function(){
   getBreadAccordion(3,-1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});


$(".qty4-accordion").change(function(){
   getBreadAccordion(4,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
}); 
$(".plus4-accordion").click(function(){
   getBreadAccordion(4,1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});
$(".minus4-accordion").click(function(){
   getBreadAccordion(4,-1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});


$(".qty5-accordion").change(function(){
   getBread(5,0);
   getVariable1();
   getCoef();
   totalProcess();
}); 
$(".plus5-accordion").click(function(){
   getBreadAccordion(5,1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});
$(".minus5-accordion").click(function(){
   getBreadAccordion(5,-1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});


$(".qty6-accordion").change(function(){
   getBreadAccordion(6,0);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
}); 
$(".plus6-accordion").click(function(){
   getBreadAccordion(6,1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});
$(".minus6-accordion").click(function(){
   getBreadAccordion(6,-1);
   getVariable1Accordion();
   getCoefAccordion();
   totalProcessAccordion();
});


// My Recipe 

$(".qtyFlour-accordion").change(function(){
totalRecipeAccordion(0,1);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
flourSVGAccordion();
});
$(".plusFlour-accordion").click(function(){
totalRecipeAccordion(0.1,1); 
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
flourSVGAccordion();         
});
$(".minusFlour-accordion").click(function(){
totalRecipeAccordion(-0.1,1);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
flourSVGAccordion();
});


$(".qtyWater-accordion").change(function(){
totalRecipeAccordion(0,2);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
waterSVGAccordion();
});
$(".plusWater-accordion").click(function(){
totalRecipeAccordion(0.1,2);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
waterSVGAccordion();
});
$(".minusWater-accordion").click(function(){
totalRecipeAccordion(-0.1,2);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
waterSVGAccordion();
});


$(".qtySalt-accordion").change(function(){
totalRecipeAccordion(0,3);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
saltSVGAccordion();
});
$(".plusSalt-accordion").click(function(){
totalRecipeAccordion(0.1,3);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
saltSVGAccordion();
});
$(".minusSalt-accordion").click(function(){
totalRecipeAccordion(-0.1,3);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
saltSVGAccordion();
});


$(".qtyYeast-accordion").change(function(){
totalRecipeAccordion(0,4);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
yeastSVGAccordion();
});
$(".plusYeast-accordion").click(function(){
totalRecipeAccordion(0.1,4);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
yeastSVGAccordion();
});
$(".minusYeast-accordion").click(function(){
totalRecipeAccordion(-0.1,4);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
yeastSVGAccordion();
});


$(".qtyDough-accordion").change(function(){
totalRecipeAccordion(0,5);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
doughSVGAccordion();
});
$(".plusDough-accordion").click(function(){
totalRecipeAccordion(0.1,5);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
doughSVGAccordion();
});
$(".minusDough-accordion").click(function(){
totalRecipeAccordion(-0.1,5);
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
doughSVGAccordion();
});


// My Process

$(".variable1-accordion").change(function(){
getVariable1Accordion();
getCoefAccordion();
totalProcessAccordion();
});

$(".operator-accordion").change(function(){
getOperatorAccordion();
getCoefAccordion();
totalProcessAccordion();
});

$(".variable2-accordion").change(function(){
getVariable2Accordion();
getCoefAccordion();
totalProcessAccordion();
});

    
});