let MessageSendButton = document.querySelector(".message-send")
let MessageForm = document.querySelector(".message-form")
let textAreaMessage = document.querySelector(".message-text")
let messageList = document.querySelector(".message-list")

let openModal = document.querySelector(".header-right")
let modalOpacityElement = document.querySelector(".modal-opacity")
let closeModal = document.querySelector(".close-modal")


MessageSendButton.onclick = function (event) {
    event.preventDefault();

    let newLiElement = document.createElement("li")
    newLiElement.classList.add("message-item")
    newLiElement.classList.add("sent")

    let textElement = document.createElement("p")
    textElement.classList.add("message-paragrif")

    textElement.textContent = textAreaMessage.value

    newLiElement.appendChild(textElement)
    messageList.appendChild(newLiElement)
    textAreaMessage.value = ""
};


openModal.addEventListener("click", function() {
    document.body.classList.toggle("modal-body")
})



let DATA = {
    users: [
        {
            id: 1,
            profile_image: "./img/photo_2022-09-25_22-12-11.jpg",
            name: "Mirzohid",
            birthday_year: 2011,
            telephone_number: +99897451235,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Salom",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
        {
            id: 2,
            profile_image: "./img/photo_2022-08-22_17-14-18.jpg",
            name: "Amirxon",
            birthday_year: 2008,
            telephone_number: +99895412357,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Hello",
                    owner: true
                },
                // {
                //     text: "Tinch",
                //     owner: false
                // }
            ]
        },
        {
            id: 3,
            profile_image: "./img/photo_2022-09-30_14-18-55.jpg",
            name: "Mironsho",
            birthday_year: 2008,
            telephone_number: +998964127485,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Nima gap?",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
        {
            id: 4,
            profile_image: "./img/photo_2022-09-30_14-22-52.jpg",
            name: "Tohir",
            birthday_year: 2010,
            telephone_number: 99895612143,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Qale",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
        {
            id: 5,
            profile_image: "./img/photo_2022-10-12_21-56-59.jpg",
            name: "Bahrom aka",
            birthday_year: 1995,
            telephone_number: +998932147856,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Wats upp",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
        {
            id: 6,
            profile_image: "./img/photo_2022-10-26_20-05-28.jpg",
            name: "Sherzod",
            birthday_year: 2007,
            telephone_number: +998951247852,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Cho tam",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
        {
            id: 7,
            profile_image: "./img/photo_2022-07-16_13-36-06.jpg",
            name: "Anvar",
            birthday_year: 2007,
            telephone_number: +9982123654,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Qanaqasan",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
        {
            id: 8,
            profile_image: "./img/photo_2022-10-10_19-22-43.jpg",
            name: "Sunnat o'rto",
            birthday_year: 2007,
            telephone_number: +9985124786,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Tinchmi?",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
        {
            id: 9,
            profile_image: "./img/photo_2022-08-22_17-14-18.jpg",
            name: "Aziz",
            birthday_year: 2007,
            telephone_number: 99895612143,
            last_seen: "last_seen",
            ownerMessage: [
                {
                    text:"Qanday",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
        {
            id: 10,
            name: "Shohruh",
            birthday_year: 2007,
            telephone_number: 99895612143,
            last_seen: "last_seen",
            // profile_image: "./photo_2022-09-30_14-22-30.jpg",
            profile_image: "https://picsum.photos/seed/picsum/200/300",
            ownerMessage: [
                {
                    text:"Nimala qivossan",
                    owner: true
                },
                // {
                //     text: "Qalesan",
                //     owner: false
                // }
            ]
        },
    ],
};
console.log(DATA);

let contactList = document.querySelector(".users")
let message_list = document.querySelector(".messages") 
let user_name = document.querySelector(".user-name")
let sitebar_right = document.querySelector(".sitebar_right")
let modalTitle = document.querySelector(".modal-title")
let message_item = document.querySelector(".message-item")
let profile_name = document.querySelector(".profile_name")
let userPhoto = document.querySelector(".userPhoto")
let userName  = document.querySelector(".userName")
let userPhoneNumber = document.querySelector(".phoneNumber")
let foydalanuvchi_haqida = document.querySelector(".foydalanuvchi_haqida")
let telefonRaqam = document.querySelector(".telefon_raqam")
let idElement = document.querySelector(".id")
let profileImage = document.querySelector(".profil-image")

DATA.users.map((item) => {
    let createElementLi = document.createElement("li")

    createElementLi.classList.add("user")
    createElementLi.textContent = item.name

    createElementLi.addEventListener("click", () => {
        messageList.textContent= ""

        sitebar_right.textContent = item.birthday_year
        profileImage.textContent = item.profile_image
        idElement.textContent = item.id
        telefonRaqam.textContent = item.telephone_number
        foydalanuvchi_haqida.textContent = item.birthday_year
        userPhoto.src = item.profile_image
        
        profile_name.textContent = item.name
        modalTitle.textContent = item.name
        sitebar_right.textContent = item.name
        user_name.textContent = item.name
        item.ownerMessage.forEach(message => {
            let newMessageElement = document.createElement("li")
            if(message.text) {
                newMessageElement.classList.add("owner")
            }
            newMessageElement.textContent = message.text
            messageList.appendChild(newMessageElement)
        })
    })


    console.log(userPhoto);
    contactList.appendChild(createElementLi)
});