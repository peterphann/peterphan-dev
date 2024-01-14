function generate() {
  id = parseInt(document.getElementById("id").value);
  instrument = document.getElementById("instrument").value
  note = document.getElementById("note").value;
  octave = parseInt(document.getElementById("octave").value);
  startDynamic = parseInt(document.getElementById("start").value);
  endDynamic = parseInt(document.getElementById("end").value);
  totalNum = parseInt(document.getElementById("total-num").value);
  totalValue = document.getElementById("total-value").value;
  subNum = parseInt(document.getElementById("sub-num").value);
  subValue = document.getElementById("sub-value").value;
  
  output = `${id} ${instrument} ${note} ${octave} ${startDynamic} ${endDynamic} ${totalNum} ${totalValue} ${subNum} ${subValue}`
  document.getElementById("result").value = output;
}

function copyToClipboard() {
  output = document.getElementById("result").value;
  navigator.clipboard.writeText(output);
  
  clipboardClasses = document.getElementById("clipboard-alert").classList;
  clipboardClasses.add("show");
  clipboardClasses.remove("d-none");

}

function resetButton() {
  document.getElementById("result").value = "";
}