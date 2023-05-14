function openNav() {
  document.getElementById("mySidenav").style.minWidth = "150px";
}

function closeNav() {
  document.getElementById("mySidenav").style.minWidth = "0";
}
function onpentopNav() {
  document.getElementById("myleftnav").style.minWidth = "150px";
}

function closetopNav() {
  document.getElementById("myleftnav").style.minWidth = "0";
}



// function myImages(images){
//   if(1==images){
//       document.getElementById('expandedImg').src='img/color1.webp';
//   }else if(2==images){
//       document.getElementById('expandedImg').src='img/color2.webp';
//   }else if(3==images){
//       document.getElementById('expandedImg').src='img/color3.webp';
//   }else if(4==images){
//       document.getElementById('expandedImg').src='img/color4.webp';
//   }else if(5==images){
//       document.getElementById('expandedImg').src='img/color5.webp';
//   }else if(6==images){
//       document.getElementById('expandedImg').src='img/color6.webp';
//   }else if(7==images){
//       document.getElementById('expandedImg').src='img/color7.webp';
//   }else if(8==images){
//       document.getElementById('expandedImg').src='img/color8.webp';
//   }else if(9==images){
//       document.getElementById('expandedImg').src='img/color9.webp';
//   }else if(10==images){
//       document.getElementById('expandedImg').src='img/color10.webp';
//   }else if(11==images){
//       document.getElementById('expandedImg').src='img/color11.webp';
//   }else if(12==images){
//       document.getElementById('expandedImg').src='img/color12.webp';
//   }
// }


// function myFunction(imgs) {
//   var expandImg = document.getElementById("expandedImg");
//   var imgText = document.getElementById("imgtext");
//   expandImg.src = imgs.src;
//   // imgText.innerHTML = imgs.alt;
//   expandImg.parentElement.style.display = "block";
// }




// 	function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }

//     function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }
// function increaseValues() {
//   var value = parseInt(document.getElementById('numbers').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('numbers').value = value;
// }

// function decreaseValues() {
//   var value = parseInt(document.getElementById('numbers').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('numbers').value = value;
// }


// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("collapsibleactive");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//           content.style.display = "none";

//     } else {
//       content.style.display = "block";
//     }
//   });
// }


// var colle = document.getElementsByClassName("collapsibl");
// var i;

// for (i = 0; i < colle.length; i++) {
//   colle[i].addEventListener("click", function() {
//     this.classList.toggle("collapsibleactiv");
//     var contente = this.nextElementSibling;
//     if (contente.style.display === "none") {
//       contente.style.display = "block";
//     } else {
//       contente.style.display = "none";
//     }
//   });
// }




// var $loupe = $(".loupe"),
//     loupeWidth = $loupe.width(),
//     loupeHeight = $loupe.height();

// $(document).on("mouseenter", ".image-magnifier", function (e) {
//     var $currImage = $(this),
//         $img = $('<img/>')
//         .attr('src', $('img', this).attr("src"))
//         .css({ 'width': $currImage.width() * 2, 'height': $currImage.height() * 2 });

//     $loupe.html($img).fadeIn(150);
    
//     $(document).on("mousemove",moveHandler);
                   
//     function moveHandler(e) {
//         var imageOffset = $currImage.offset(),
//             fx = imageOffset.left - loupeWidth / 2,
//             fy = imageOffset.top - loupeHeight / 2,
//             fh = imageOffset.top + $currImage.height() + loupeHeight / 2,
//             fw = imageOffset.left + $currImage.width() + loupeWidth / 2;
        
//         $loupe.css({
//             'left': e.pageX - 75,
//             'top': e.pageY - 75
//         });

//         var loupeOffset = $loupe.offset(),
//             lx = loupeOffset.left,
//             ly = loupeOffset.top,
//             lw = lx + loupeWidth,
//             lh = ly + loupeHeight,
//             bigy = (ly - loupeHeight / 4 - fy) * 2,
//             bigx = (lx - loupeWidth / 4 - fx) * 2;

//         $img.css({ 'left': -bigx, 'top': -bigy });

//         if (lx < fx || lh > fh || ly < fy || lw > fw) {
//             $img.remove();
//             $(document).off("mousemove",moveHandler);
//             $loupe.fadeOut(150);
//         }
//     }
// });
