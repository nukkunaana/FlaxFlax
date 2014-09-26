// Расчет стоимости утеплителя в зависимости от площади и цены за м3(толщины и вида утеплителя).
$(document).ready(function(){
	
	var nameModel = $("#nameModel");
	var thickness = $("#thickness");
	var square = $("#square");
	var priceM2 = $(".calculator__price .priceM2");
	var priceM3 = $(".calculator__price .priceM3");
	var priceTotal = $(".calculator__price .priceTotal");

// при изменении наименования вида утеплителя указывается соответствующая цена, также производится перерасчет стоимости покупки
	nameModel.change(function(){
		if (nameModel.val() == "Val-Flax"){
			priceM2.text('200')
		}
		else if (nameModel.val() == "Flaxan"){
			priceM2.text('300')
		}
		// если толщина утеплителя указана, указывается цена в м3
		if (thickness.val() != ""){ 
			if ((thickness.val() == "28") && (nameModel.val() == "Val-Flax")){
				priceM3.text('200')
			}
			else if ((thickness.val() == "35") && (nameModel.val() == "Val-Flax")){
				priceM3.text('350')
			}
			else if ((thickness.val() == "48") && (nameModel.val() == "Val-Flax")){
				priceM3.text('480')
			}

			if ((thickness.val() == "28") && (nameModel.val() == "Flaxan")){
				priceM3.text('300')
			}
			else if ((thickness.val() == "35") && (nameModel.val() == "Flaxan")){
				priceM3.text('500')
			}
			else if ((thickness.val() == "48") && (nameModel.val() == "Flaxan")){
				priceM3.text('600')
			}
		}
		// расчет стоимости
		if ((nameModel.val() != "") && (square.val() != "")){ 
			$("output").html(square.val() * priceM3.text());
		}
	});

// при изменении толщины, а также при выборе типа утеплителя указывается соответствующая цена, также производится перерасчет стоимости покупки
	thickness.change(function(){
		if ((thickness.val() == "28") && (nameModel.val() == "Val-Flax")){
			priceM3.text('200')
		}
		else if ((thickness.val() == "35") && (nameModel.val() == "Val-Flax")){
			priceM3.text('350')
		}
		else if ((thickness.val() == "48") && (nameModel.val() == "Val-Flax")){
			priceM3.text('480')
		}

		if ((thickness.val() == "28") && (nameModel.val() == "Flaxan")){
			priceM3.text('300')
		}
		else if ((thickness.val() == "35") && (nameModel.val() == "Flaxan")){
			priceM3.text('500')
		}
		else if ((thickness.val() == "48") && (nameModel.val() == "Flaxan")){
			priceM3.text('600')
		}
		// расчет стоимости
		if ((square.val() != "") && (nameModel.val() != "")){
			$("output").html(square.val() * priceM3.text());
		}
		
	});
	// если цена в м3 вычислилась, то считает стоимость покупки
	square.change(function(){

		if (priceM3.text() != ""){ 

			$("output").html(square.val() * priceM3.text());
		}
	});
	// иммитация отправки заказа
	$("#calculationForm").submit(function(event){
    	event.preventDefault();
    	if((priceM3.text() != "000") && (priceM2.text() != "000")) {
    		alert( "Заказ принят! Служба доставки Вам перезвонит.");
  		} else if(square.val() == "") {
  			alert( "Укажите площадь");
  		} else {
  			alert( "Выберите вид утеплителя");
  		}
    });
		
});