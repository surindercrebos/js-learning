// function color_change_red(){
//     document.getElementById("first_heading").style.color="red";
// }
// function color_change_yellow(){
//     document.getElementById("first_heading").style.color="yellow";
// }
// function color_change_blue(){
//     document.getElementById("first_heading").style.color="blue";
// }

// function color_change(color){
//     document.getElementById("first_heading").style.color=color;
// }
// function background_change(color){
//     document.getElementById("first_heading").style.background=color;
// }

// function text_change(){
//     let color = document.getElementById("text_color").value
//     document.getElementById("first_heading").style.color=color
//     document.getElementById("text_color").value=""
// }

// function select_color(){
//      let color = document.getElementById("select_color").value
//      document.getElementById("first_heading").style.color=color
// }

// function all_output(){
//     let text_area_content = document.getElementById("textarea_value").value
//     document.getElementById("all_output_values").innerHTML=text_area_content

//     let select_text_color = document.getElementById("select_text_color").value
//     document.getElementById("all_output_values").style.color=select_text_color

//     let select_bg_color = document.getElementById("select_bg_color").value
//     document.getElementById("all_output_values").style.background=select_bg_color

//     let font_size = document.getElementById("font_size").value
//     document.getElementById("all_output_values").style.fontSize=font_size + "px"
// }



function append_list_value(color){
   let append_list_text_value = document.getElementById("append_list").value
   if (append_list_text_value=="") {
    alert("Please enter a name before adding it to the list.");
    return;
    }
   let li = document.createElement("li")
   li.innerHTML = append_list_text_value
   li.style.color = color
   document.getElementById("append_listing").appendChild(li)
   document.getElementById("append_list").value=""
}
