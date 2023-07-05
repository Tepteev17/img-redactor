var img = new Image();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fileName = "";
let onLoadImage = false
let params = {
  brightness: 0,
  contrast: 0,
  saturation: 0,
  noise:0,
  sharpen:0,
  sepia:0,
  blur: 0,
  gamma: 0,
  
};

let targets = [];

//toggle active class
$(".filter-name").on("click", (el) => {
  if (onLoadImage) {
    $(".wrap-range." + el.target.classList[1]).addClass("active");
    targets.push(el.target);
    if (targets[targets.length - 2] != targets[targets.length - 1]) {
      $(".wrap-range." + targets[targets.length - 2].classList[1]).removeClass(
        "active"
      );
    }
  }
  return 
});
function setRangeInput(maxValue, minValue, value, step, dataFilter) {
  const rangeInput = document.querySelector(".range-input." + dataFilter)
  rangeInput.setAttribute("max", maxValue);
  rangeInput.setAttribute("min", minValue);
  rangeInput.setAttribute("data-filter", dataFilter);
  rangeInput.setAttribute("step", step);
  rangeInput.setAttribute("value", value);

}

$(document).ready(function () {
  $("#brightness-inc").on("click", function (e) {
    params.brightness+=10
    setRangeInput(100, -100, params.brightness, 10, "brightness")
    Caman("#canvas", img, function () {
      this.brightness(10).render();
    });

  });
  $("#brightness-dec").on("click", function (e) {
    params.brightness-=10
    setRangeInput(100, -100, params.brightness, 10, "brightness")
    Caman("#canvas", img, function () {
      this.brightness(-10).render();
    });
  });


  $("#contrast-inc").on("click", function (e) {
    params.contrast+=10
    setRangeInput(100, -100, params.contrast, 10, "contrast")
    Caman("#canvas", img, function () {
      this.contrast(10).render();
    });
  });
  $("#contrast-dec").on("click", function (e) {
    params.contrast-=10
    setRangeInput(100, -100, params.contrast, 10, "contrast")
    Caman("#canvas", img, function () {
      this.contrast(-10).render();
    });
  });



  $("#saturation-inc").on("click", function (e) {
    params.saturation+=10
    setRangeInput(100, -100, params.saturation, 10, "saturation")
    Caman("#canvas", img, function () {
      this.saturation(10).render();
    });
  });

  $("#saturation-dec").on("click", function (e) {
    params.saturation-=10
    setRangeInput(100, -100, params.saturation, 10, "saturation")
    Caman("#canvas", img, function () {
      this.saturation(-10).render();
    });
  });



  // $("#vibrance-inc").on("click", function (e) {
  //   Caman("#canvas", img, function () {
  //     this.vibrance(10).render();
  //   });
  // });

  // $("#vibrance-dec").on("click", function (e) {
  //   Caman("#canvas", img, function () {
  //     this.vibrance(-10).render();
  //   });
  // });



  // $("#exposure-inc").on("click", function (e) {
  //   Caman("#canvas", img, function () {
  //     this.exposure(10).render();
  //   });
  // });

  // $("#exposure-dec").on("click", function (e) {
  //   Caman("#canvas", img, function () {
  //     this.exposure(-10).render();
  //   });
  // });

  $("#noise-inc").on("click", function (e) {
    params.noise+=10
    setRangeInput(100, -100, params.noise, 10, "noise")
    Caman("#canvas", img, function () {
      this.noise(10).render();
    });
  });



  $("#sharpen-inc").on("click", function (e) {
    params.sharpen+=10
    setRangeInput(100, -100, params.sharpen, 10, "sharpen")
    Caman("#canvas", img, function () {
      this.sharpen(10).render();
    });
  });


  $("#sepia-inc").on("click", function (e) {
    params.sepia+=20
    setRangeInput(100, -100, params.sepia, 20, "sepia")
    Caman("#canvas", img, function () {
      this.sepia(20).render();
    });
  });

  // $("#hue-inc").on("click", function (e) {
  //   Caman("#canvas", img, function () {
  //     this.hue(10).render();
  //   });
  // });

  $("#blur-inc").on("click", function (e) {
    params.blur+=5
    setRangeInput(100, 0, params.blur, 5, "blur")
    Caman("#canvas", img, function () {
      this.stackBlur(5).render();
    });
  });

  $("#blur-dec").on("click", function (e) {
    Caman("#canvas", img, function () {
      params.blur-=10
      setRangeInput(100, 0, params.blur, 10, "blur")
      Caman("#canvas", img, function () {
        this.stackBlur(0).render(); 
      });
    });
  });


  $("#gamma-inc").on("click", function (e) {
    params.gamma+=1
    setRangeInput(10, 0, params.gamma, 1, "gamma")
    Caman("#canvas", img, function () {
      this.gamma(1).render();
    });
  });



  $("#clip-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.clip(10).render();
    });
  });

  $("#vintage-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.vintage().render();
    });
  });

  $("#lomo-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.lomo().render();
    });
  });

  $("#calrity-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.clarity().render();
    });
  });

  $("#sincity-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.sinCity().render();
    });
  });

  $("#crossprocess-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.crossProcess().render();
    });
  });

  $("#pinhole-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.pinhole().render();
    });
  });

  $("#nostalgia-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.nostalgia().render();
    });
  });

  $("#majestic-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.herMajesty().render();
    });
  });


  
  $("#download-btn").on("click", function (e) {
    var fileExtension = fileName.slice(-4);
    if (fileExtension == ".jpg" || fileExtension == ".png") {
      var actualName = fileName.substring(0, fileName.length - 4);
    }
    download(canvas, actualName + "-edited.jpg");
  });

  $("#upload-file").on("change", function () {
    var file = document.querySelector("#upload-file").files[0];
    var reader = new FileReader();

    if (file) {
      fileName = file.name;
      reader.readAsDataURL(file);
    }

    reader.addEventListener(
      "load",
      function () {
        img = new Image();
        img.src = reader.result;
        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          onLoadImage = true
          $("#canvas").removeAttr("data-caman-id");
        };
      },
      false
    );
  });
});

//reset all change
$(".reset").on("click", function () {
  var file = document.querySelector("#upload-file").files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener(
    "load",
    function () {
      img = new Image();
      img.src = reader.result;
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        $("#canvas").removeAttr("data-caman-id");
        params = {
          brightness: 0,
          contrast: 0,
          saturation: 0,
          noise:0,
          sharpen:0,
          sepia:0,
          blur: 0,
          gamma: 0,
          
        };
      };
    },
    false
  );
});

function download(canvas, filename) {
  var e;
  var lnk = document.createElement("a");
  lnk.download = filename;

  lnk.href = canvas.toDataURL("image/jpeg", 0.8);

  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}
