async function card_Display(){


    var url = 'https://restcountries.com/v3.1/all'

    var fetch_url = await fetch(url)
    var await_url = await fetch_url.json()

    var body = document.querySelector('body')
    var create_container = document.createElement('div')
    create_container.setAttribute('class','container')
    
    body.append(create_container)

    
    
    var create_row = document.createElement('div')
    create_row.setAttribute('class','row')
    create_container.append(create_row)

    
    for( var da =0 ; da<50 ; da++){
        
console.log(await_url[da]);

var create_col_md_4 = document.createElement('div')
create_col_md_4.setAttribute('class','col-md-4')
create_col_md_4.classList.add('mb-5')
create_row.append(create_col_md_4)




var create_card = document.createElement('div')
create_card.setAttribute('class','card')
create_card.classList.add('bg-dark')
create_card.classList.add('text-white')
create_card.classList.add('mt-5')
// create_card.style.width='20rem'


create_col_md_4.append(create_card)



var create_header = document.createElement('div')
create_header.setAttribute('class','card-header')
create_header.classList.add('text-center')
create_header.classList.add('bg-black')
create_header.classList.add('p-3')
create_header.innerText = await_url[da].name.common
create_card.append(create_header)




var create_card_body = document.createElement('div')
create_card_body.setAttribute('class','card-body')
create_card.append(create_card_body)


var create_img = document.createElement('img')
create_img.setAttribute('src',await_url[da].flags.png)
create_img.setAttribute('alt','Flags.img')
create_img.setAttribute('class','text-center')
create_img.classList.add('card-img-top')
create_img.classList.add(`mb-4`)
create_img.classList.add(`mt-3`)


create_card_body.append(create_img)




var create_card_text1 = document.createElement('div')
create_card_text1.setAttribute('class','card-text')
create_card_text1.classList.add('text-center')
create_card_text1.classList.add('mb-2')
create_card_text1.classList.add('m-2')
create_card_text1.textContent=`Capital : ${await_url[da].capital} `
create_card_body.append(create_card_text1)


var create_card_text2 = document.createElement('div')
create_card_text2.setAttribute('class','card-text')
create_card_text2.classList.add('text-center')
create_card_text2.classList.add('mb-2')
create_card_text2.textContent=`Region : ${await_url[da].region}`

create_card_body.append(create_card_text2)


var create_card_text3 = document.createElement('div')
create_card_text3.setAttribute('class','card-text')
create_card_text3.classList.add('text-center')
create_card_text3.classList.add('mb-2')
create_card_text3.textContent = `Country Code : ${await_url[da].cca3}`


create_card_body.append(create_card_text3)





var create_footer = document.createElement('div')
    create_footer.setAttribute("class",'card-footer')
    create_footer.classList.add('text-center')
    create_footer.classList.add('mb-4')
    create_card_body.append(create_footer)



var create_button = document.createElement('button')
create_button.setAttribute('class','btn')
create_button.classList.add('text-center')

create_button.textContent='Click For Weather'

create_button.classList.add("btn-outline-danger")
create_button.setAttribute('data-bs-target',`#staticBackdrop${da}`)
create_button.setAttribute('data-bs-toggle','modal')
create_footer.append(create_button)



var create_modal = document.createElement('div')
create_modal.setAttribute('id',`staticBackdrop${da}`)
create_modal.setAttribute('data-bs-backdrop','static')
create_modal.setAttribute('tabinex','-1')
create_modal.setAttribute('class','modal')
create_modal.classList.add('fade')


var create_modal_dialog = document.createElement('div')
create_modal_dialog.setAttribute('class','modal-dialog')
create_modal.append(create_modal_dialog)


var create_modal_content = document.createElement('div')
create_modal_content.setAttribute('class','modal-content')
create_modal_dialog.append(create_modal_content)


var create_modal_header = document.createElement('div')
create_modal_header.setAttribute('class','modal-header')
create_modal_header.innerHTML=`
<h2><span class="badge bg-secondary" >Weather Report </span> <i class="fa-solid fa-cloud-sun-rain"></i> </h2>  

`
create_modal_content.append(create_modal_header)

// type="button" class="btn-close" data-bs-dismiss="modal" 

var create_modal_xbutton = document.createElement('div')
create_modal_xbutton.setAttribute('class','btn-close')
create_modal_xbutton.setAttribute('data-bs-dismiss','modal')
create_modal_xbutton.setAttribute('type','button')
create_modal_header.append(create_modal_xbutton)


var create_modal_body = document.createElement('div')   
create_modal_body.setAttribute('class','modal-body')

create_modal_body.classList.add('text-center')
create_modal_content.append(create_modal_body)



var create_modal_footer = document.createElement('div')
create_modal_footer.setAttribute('class','modal-footer')

create_modal_content.append(create_modal_footer)

var create_modal_dismiss_btn = document.createElement('div')
create_modal_dismiss_btn.textContent="Close"
create_modal_dismiss_btn.setAttribute('class','btn')
create_modal_dismiss_btn.setAttribute('data-bs-dismiss','modal')
create_modal_dismiss_btn.classList.add('btn-danger')
create_modal_footer.append(create_modal_dismiss_btn)

create_col_md_4.append(create_modal)







var lat = await_url[da].latlng[0]
var long = await_url[da].latlng[1]

// console.log("this is latitude :",lat.length);
// console.log('this is logitute' ,log);




var wheater_url =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=c16e4f178c751264166be4d852034b5d  `   

// console.log(wheater_url.length);
// new api key c16e4f178c751264166be4d852034b5d

// 5bc34430d0bf99c5e7d5fb11c458c134



// var apikey = '6c271fcbfc76512fb3cca9bab37c8df1'
// 6c271fcbfc76512fb3cca9bab37c8df1
var wh_urlfetch = await fetch(wheater_url)
var final_fetch = await wh_urlfetch.json()


    // console.log(final_fetch.list.weather[0].main,final_fetch.list.weather[0].description);
 
 var create_data = document.createElement('div')

    create_data.innerHTML= `
    <h3><span class="badge bg-primary" >SKY</span>  <span > ${final_fetch.list[0].weather[0].main } </span>  </h3>  
    
    <h3><span class="badge bg-primary" >DAY</span>  <span   >  ${final_fetch.list[0].weather[0].description }</span>  </h3>  
    

    
   
    
    
    <h3><span class="badge bg-danger" > Temperature </span> ${final_fetch.list[0].main.temp }  <i class="fa-solid fa-temperature-three-quarters"></i></h3>  
    
    
    ` 
    
    create_modal_body.append(create_data)




// }
}






    









}


card_Display()



