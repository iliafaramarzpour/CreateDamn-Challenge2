var DamnName = document.querySelector("#damn-name");
var DamnLabel = document.querySelector("#damn-label");
var DamnBtn = document.querySelector("#damn-btn");
var MainOverlay = document.querySelector(".main__overlay");
var MainOverlayBox = document.querySelector(".main__overlay__box");
var DamnText = document.querySelector("#damn-text");
var GetChar = document.querySelector(".input__second");
var WhatsAppImage = document.querySelector("#whats-app-icon");
var TelegramImage = document.querySelector("#telegram-icon");
var PrintImage = document.querySelector("#print-icon");
var SpecialAudio = document.querySelector("#audio");
var DamnList = [
  { text: "$ خیلی خری" },
  { text: "$ خیلی گاوی" },
  { text: "$ عوضی هستی دومی نداری" },
  { text: "$ بیشعور" },
  { text: "$ یک آدم فوق العاده خی" },
  { text: "تنها گاو روی زمین : $" },
  { text: "تو را در بین پهن دیدم $" },
  { text: "بدترین اتفاق زندگیم تویی $" },
  { text: "شبیه بیب عمر و عاصی $" },
  { text: "خی از تو خوشگلتره $" },
  { text: "$ خدا هم گاهی اشتباه میکنه که تو بودی" },
  { text: "$ گاوی یا خی ؟" },
  { text: "بیب بیب $" },
  { text: "آخه تو چقدر گاوی $" },
  { text: "$ مفت خور" },
  { text: "$ دزد" },
  { text: "$ دِزدِ سگ" },
  { text: "$ شه ور زرنگ" },
  { text: "$ گت بتیم" },
  { text: "$ خی زور" },
  { text: "$ گالش" },
  { text: "$ خیلی گلی" },
  { text: "$ جیگرم" },
];

function ToggleLabelForInput() {
  DamnLabel.classList.toggle("label__focus");
}

function PrintPage() {
  DamnText.classList.remove("d-none");
  GetChar.classList.add("d-none");
  WhatsAppImage.style.display = "none";
  TelegramImage.style.display = "none";
  PrintImage.style.display = "none";
  window.print();
  DamnText.classList.add("d-none");
  GetChar.classList.remove("d-none");
  WhatsAppImage.style.display = "";
  TelegramImage.style.display = "";
  PrintImage.style.display = "";
}

function SendToTelegram() {
  var Result = DamnText.textContent.replace(/ /g, "%20");
  window.open("https://t.me/share/url?url=" + Result, "_blank");
}

function SendToWhatsapp() {
  var Result = DamnText.textContent.replace(/ /g, "%20");
  window.open("whatsapp://send?text=" + Result, "_blank");
}

function CreateRandomDamn() {
  var UserName = DamnName.value;
  var RanNumWithListLength = Math.floor(Math.random() * DamnList.length);
  var RanDamn = DamnList[RanNumWithListLength];
  var FullDamnWithName = RanDamn.text.replace("$", UserName.trim());
  DamnList.splice(RanNumWithListLength, 1);
  if (DamnList.length === 0) {
    DamnList = [
      { text: "$ خیلی خری" },
      { text: "$ خیلی گاوی" },
      { text: "$ عوضی هستی دومی نداری" },
      { text: "$ بیشعور" },
      { text: "$ یک آدم فوق العاده خی" },
      { text: "تنها گاو روی زمین : $" },
      { text: "تو را در بین پهن دیدم $" },
      { text: "بدترین اتفاق زندگیم تویی $" },
      { text: "شبیه بیب عمر و عاصی $" },
      { text: "خی از تو خوشگلتره $" },
      { text: "$ خدا هم گاهی اشتباه میکنه که تو بودی" },
      { text: "$ گاوی یا خی ؟" },
      { text: "بیب بیب $" },
      { text: "آخه تو چقدر گاوی $" },
      { text: "$ مفت خور" },
      { text: "$ دزد" },
      { text: "$ دِزدِ سگ" },
      { text: "$ شه ور زرنگ" },
      { text: "$ گت بتیم" },
      { text: "$ خی زور" },
      { text: "$ گالش" },
      { text: "$ خیلی گلی" },
      { text: "$ جیگرم" },
    ];
  }
  return FullDamnWithName;
}

function CreatDamn() {
  if (DamnName.value === "" || !Number.isNaN(+DamnName.value)) {
    swal("لطفا مقدار اسم رو به درستی وارد کنید");
    DamnName.value = "";
  } else {
    MainOverlay.classList.remove("d-none");
    MainOverlayBox.classList.remove("d-none");
    DamnText.textContent = CreateRandomDamn();
    SpecialAudio.play();

    var CheckTimerEndAudio = setInterval(function () {
      if (SpecialAudio.currentTime === SpecialAudio.duration) {
        SpecialAudio.currentTime = 0;
        SpecialAudio.play();
        clearInterval(CheckTimerEndAudio);
      }
    }, 1000);

    var TimerCloseBox = setTimeout(function () {
      DamnText.classList.add("d-none");
      GetChar.classList.remove("d-none");
      console.log(DamnText.textContent.length);
      GetChar.onkeydown = function (e) {
        if (e.keyCode === 13) {
          if (DamnText.textContent.length === +GetChar.value) {
            swal({
              title: "آفرین درست گفتی!",
              icon: "success",
            });
            DamnText.classList.remove("d-none");
            GetChar.value = "";
            GetChar.classList.add("d-none");
            MainOverlay.classList.add("d-none");
            MainOverlayBox.classList.add("d-none");
            DamnName.value = "";
            SpecialAudio.currentTime = 0;
            SpecialAudio.pause();
          } else {
            swal({
              title: "اشتباه گفتی عزیزم",
              icon: "error",
            });
            DamnText.classList.remove("d-none");
            GetChar.value = "";
            GetChar.classList.add("d-none");
            MainOverlay.classList.add("d-none");
            MainOverlayBox.classList.add("d-none");
            DamnName.value = "";
            SpecialAudio.currentTime = 0;
            SpecialAudio.pause();
          }
        }
      };
      clearTimeout(TimerCloseBox);
    }, 3000);
  }
}
