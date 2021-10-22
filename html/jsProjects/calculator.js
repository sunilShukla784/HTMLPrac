function Operations(optType) {
  var number1 = document.getElementById("num1").value;
  var number2 = document.getElementById("num2").value;

  switch (optType) {
    case "add":
      if (number1 && number2) {
        var res1 = parseInt(number1) + parseInt(number2);
        document.getElementById("res").innerHTML = res1;
      } else {
        if (!number1 && !number2) {
          document.getElementById("warn1").innerHTML = "";
          document.getElementById("warn2").innerHTML = "";
          alert("Pleease enter the numebr");
        } else if (!number1) {
            var p1 = document.querySelector("h5");
            p1.className = "xyz";
          document.getElementById("warn1").innerHTML = "Please fill this num1.";
          document.getElementById("warn2").innerHTML = "";
        } else if (!number2) {
          document.getElementById("warn2").innerHTML = "Please fill this num2.";
          document.getElementById("warn1").innerHTML = "";
        }
      }
      break;

      case "minus":
        if (number1 && number2) {
          var res1 = parseInt(number1) - parseInt(number2);
          document.getElementById("res").innerHTML = res1;
        } else {
          if (!number1 && !number2) {
            document.getElementById("warn1").innerHTML = "";
            document.getElementById("warn2").innerHTML = "";
            alert("Pleease enter the numebr");
          } else if (!number1) {
              var p1 = document.querySelector("h5");
              p1.className = "xyz";
            document.getElementById("warn1").innerHTML = "Please fill this num1.";
            document.getElementById("warn2").innerHTML = "";
          } else if (!number2) {
            document.getElementById("warn2").innerHTML = "Please fill this num2.";
            document.getElementById("warn1").innerHTML = "";
          }
        }
        break;

        case "divide":
            if (number1 && number2) {
              var res1 = parseInt(number1) / parseInt(number2);
              document.getElementById("res").innerHTML = res1;
            } else {
              if (!number1 && !number2) {
                document.getElementById("warn1").innerHTML = "";
                document.getElementById("warn2").innerHTML = "";
                alert("Pleease enter the numebr");
              } else if (!number1) {
                  var p1 = document.querySelector("h5");
                  p1.className = "xyz";
                document.getElementById("warn1").innerHTML = "Please fill this num1.";
                document.getElementById("warn2").innerHTML = "";
              } else if (!number2) {
                document.getElementById("warn2").innerHTML = "Please fill this num2.";
                document.getElementById("warn1").innerHTML = "";
              }
            }
            break;

            case "mul":
            if (number1 && number2) {
              var res1 = parseInt(number1) * parseInt(number2);
              document.getElementById("res").innerHTML = res1;
            } else {
              if (!number1 && !number2) {
                document.getElementById("warn1").innerHTML = "";
                document.getElementById("warn2").innerHTML = "";
                alert("Pleease enter the numebr");
              } else if (!number1) {
                  var p1 = document.querySelector("h5");
                  p1.className = "xyz";
                document.getElementById("warn1").innerHTML = "Please fill this num1.";
                document.getElementById("warn2").innerHTML = "";
              } else if (!number2) {
                document.getElementById("warn2").innerHTML = "Please fill this num2.";
                document.getElementById("warn1").innerHTML = "";
              }
            }
            break;
    default:
      break;
  }
}
