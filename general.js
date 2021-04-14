try {
  let _utm2_ = window.location.href;
  if (_utm2_.indexOf("utm") > -1) {
    localStorage.setItem("_utm2_", _utm2_);
  }
} catch (error) {}

window.onload = function() {
  //try { add_utm_form( "formulario---seguros-13-13" ) } catch (error) {}
  // "formulario---seguros-13-13"
  //try { set_utm_form( ) } catch (error) {}
  //try { set_utm_form2( ) } catch (error) {}

  buscarFormularioAddField();
};

function buscarFormularioAddField() {
  let _utm_ = get_utm_part();
  form_envio = document.getElementsByClassName("form-envio");
  let inputs = new Array();
  try {
    inputs = form_envio[0].elements;
  } catch (error) {}

  // Iterate over the form controls
  for (i = 0; i < inputs.length; i++) {
    IDForm;

    if (inputs[i].id === "utm_source") {
      set_utm_input2("utm_source", _utm_.utm_source);
    }

    if (inputs[i].id === "utm_medium") {
      set_utm_input2("utm_medium", _utm_.utm_medium);
    }

    if (inputs[i].id === "utm_campaign") {
      set_utm_input2("utm_campaign", _utm_.utm_campaign);
    }

    if (inputs[i].id === "utm_campaign_id") {
      set_utm_input2("utm_campaign_id", _utm_.utm_campaign_id);
    }

    if (inputs[i].id === "utm_adset_id") {
      set_utm_input2("utm_adset_id", _utm_.utm_adset_id);
    }

    if (inputs[i].id === "utm_ad_id") {
      set_utm_input2("utm_ad_id", _utm_.utm_ad_id);
    }
  }
}

function add_utm_input2(_form_, _id_, _name_, _val_) {
  let element1 = document.createElement("input");
  element1.type = "hidden";
  element1.id = _id_;
  element1.name = _name_;
  element1.value = _val_;
  _form_.appendChild(element1);
}

function set_utm_form2() {
  let _utm_ = get_utm_part();
  set_utm_input2("utm_source", _utm_.utm_source);
  set_utm_input2("utm_medium", _utm_.utm_medium);
  set_utm_input2("utm_campaign", _utm_.utm_campaign);
  set_utm_input2("utm_campaign_id", _utm_.utm_campaign_id);
  set_utm_input2("utm_adset_id", _utm_.utm_adset_id);
  set_utm_input2("utm_ad_id", _utm_.utm_ad_id);
}

function set_utm_input2(_id_, _val_) {
  let campo = document.getElementById(_id_);
  document.getElementById("span_" + campo.name).style.display = "none";
  campo.value = _val_;
}

function set_utm_form() {
  let _utm_ = get_utm_part();
  set_utm_input("input_27", _utm_.utm_source);
  set_utm_input("input_28", _utm_.utm_medium);
  set_utm_input("input_29", _utm_.utm_campaign);
  set_utm_input("input_30", _utm_.utm_campaign_id);
  set_utm_input("input_31", _utm_.utm_adset_id);
  set_utm_input("input_32", _utm_.utm_ad_id);
}

function set_utm_form() {
  let _utm_ = get_utm_part();
  set_utm_input("input_27", _utm_.utm_source);
  set_utm_input("input_28", _utm_.utm_medium);
  set_utm_input("input_29", _utm_.utm_campaign);
  set_utm_input("input_30", _utm_.utm_campaign_id);
  set_utm_input("input_31", _utm_.utm_adset_id);
  set_utm_input("input_32", _utm_.utm_ad_id);
}

function add_utm_form(_form_) {
  let _utm_ = get_utm_part();
  add_utm_input(_form_, "input_27", _utm_.utm_source);
  add_utm_input(_form_, "input_28", _utm_.utm_medium);
  add_utm_input(_form_, "input_29", _utm_.utm_campaign);
  add_utm_input(_form_, "input_30", _utm_.utm_campaign_id);
  add_utm_input(_form_, "input_31", _utm_.utm_adset_id);
  add_utm_input(_form_, "input_32", _utm_.utm_ad_id);
}

function set_utm_input(_name_, _val_) {
  document.getElementById("span_" + _name_).style.display = "none";
  let element1 = document.querySelector("input[name='" + _name_ + "']");
  element1.value = _val_;
}

function add_utm_input(_form_, _name_, _val_) {
  //let form = document.getElementById('formulario---seguros-13-13')
  let element1 = document.createElement("input");
  element1.type = "hidden";
  element1.name = _name_;
  element1.value = _val_;
  _form_.appendChild(element1);
}

function get_utm_part() {
  utm_source = "";
  utm_medium = "";
  utm_campaign = "";
  utm_campaign_id = "";
  utm_adset_id = "";
  utm_ad_id = "";

  try {
    res_utm2_ = localStorage.getItem("_utm2_").split("?");
    res_campos = res_utm2_[1].split("&");
    for (let index = 0; index < res_campos.length; index++) {
      element = res_campos[index];
      campo = element.split("=");

      if (campo[0] == "utm_source") {
        utm_source = campo[1];
      }
      if (campo[0] == "utm_medium") {
        utm_medium = campo[1];
      }
      if (campo[0] == "utm_campaign") {
        utm_campaign = campo[1];
      }
      if (campo[0] == "utm_campaign_id" || campo[0] == "campaignid") {
        utm_campaign_id = campo[1];
      }
      if (campo[0] == "utm_adset_id" || campo[0] == "adgroupid") {
        utm_adset_id = campo[1];
      }
      if (campo[0] == "utm_ad_id") {
        utm_ad_id = campo[1];
      }
      if (campo[0] == "utm_content") {
        utm_ad_content = campo[1];
      }
    }
  } catch (error) {}

  campo_ = new Object();
  campo_.utm_source = utm_source;
  campo_.utm_medium = utm_medium;
  campo_.utm_campaign = utm_campaign;
  campo_.utm_campaign_id = utm_campaign_id;
  campo_.utm_adset_id = utm_adset_id;
  campo_.utm_ad_id = utm_ad_id;

  return campo_;
}
