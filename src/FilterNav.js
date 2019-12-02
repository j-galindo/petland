import React from "react"


function FilterNav(){
  return(
<div class="container">
  <nav class=" navbar back fixed-top">
      <div class="btn-group ">
              <button class="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All Breeds
              </button>
        <div class="dropdown-menu">
        <div class="form-check row">
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                AKITA
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                BOS BULL
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                BOXER
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                DALMATIAN
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                HUSKIMO
              </label>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label" for="defaultCheck1">
                LABADOODLE
              </label>
        </div>
        </div>
      </div>
      <div class="btn-group">
        <button class="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Locations
        </button>
        <div class="dropdown-menu">
        <div class="form-check row">
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                KENDALL
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                PEMBROKE PINES
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                DAVIE
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                LARGO
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                PLANTAION
              </label>
            
        </div>
        </div>
      </div>
      <div class="btn-group">
        <button class="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Animal Type
        </button>
        <div class="dropdown-menu">
        <div class="form-check row">
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                CAT
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                DOG
              </label>
             
            
        </div>
        </div>
      </div>
      <div class="btn-group ">
        <button class="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Genders
        </button>
        <div class="dropdown-menu">
        <div class="form-check row">
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                MALE
              </label>
              <input class="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label row" for="defaultCheck1">
                FEMALE
              </label>
             
            
        </div>
        </div>
      </div>
  </nav>
</div>

  )
}
export default FilterNav