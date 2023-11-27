import React, { useEffect } from "react";
import axios from "axios"; // Import axios
import './CheckoutInfo.css';

export default function CheckoutInfo() {
    useEffect(() => {
        const citis = document.getElementById("city");
        const districts = document.getElementById("district");
        const wards = document.getElementById("ward");
    
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
            );
            renderCity(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        const renderCity = (data) => {
          for (const x of data) {
            citis.options[citis.options.length] = new Option(x.Name, x.Id);
          }
          citis.onchange = function () {
            districts.length = 1;
            wards.length = 1;
            if (this.value !== "") {
              const result = data.filter((n) => n.Id === this.value);
    
              for (const k of result[0].Districts) {
                districts.options[districts.options.length] = new Option(
                  k.Name,
                  k.Id
                );
              }
            }
          };
          districts.onchange = function () {
            wards.length = 1;
            const dataCity = data.filter((n) => n.Id === citis.value);
            if (this.value !== "") {
              const dataWards =
                dataCity[0].Districts.filter((n) => n.Id === this.value)[0].Wards;
    
              for (const w of dataWards) {
                wards.options[wards.options.length] = new Option(w.Name, w.Id);
              }
            }
          };
        };
    
        fetchData(); // Fetch data when the component mounts
      }, []); // Empty dependency array means this effect runs once after the initial render
    
    return (
        <div class="coAddress arow">
            <div class="coFirstInfo marginBot30">
                <h1 class="titleInfo">1 ENTER A NEW SHIPPING ADDRESS</h1>
                <div class="addressformWrapper">
                    <form class="addressform mglr arow">
                        <h2 class="title-form">Add a new address</h2>
                        <label for="fname">Full name:</label><br />
                        <input type="text" id="fname" name="fname" class="css_input" placeholder="Nguyen Thi T" /><br /><br />
                        <label for="phone">Phone Number:</label><br />
                        <input type="number" id="phone" name="phone" class="css_input" placeholder="0857547xxx" /><br /><br />
                        <div class="slAdrress">

                            <select class="form-select form-select-sm mb-3  mgl" id="city" aria-label=".form-select-sm">
                                <option value="" selected>City</option>
                            </select>

                            <select class="form-select form-select-sm mb-3 mgl" id="district" aria-label=".form-select-sm">
                                <option value="" selected>District</option>
                            </select>

                            <select class="form-select form-select-sm mb-3  mgl" id="ward" aria-label=".form-select-sm">
                                <option value="" selected>Ward</option>
                            </select>
                        </div>
                        <label for="address">Address:</label><br />
                        <input type="text" id="address" name="address" class="css_input" placeholder="1st Langu Building" /><br /><br />
                        <input type="submit" value="Use This Address" class="btnSubmit" />
                    </form>
                </div>
            </div>
            <div class="coSecondInfo marginBot30">
                <h1 class="titleInfo">2 METHOD PAYMENT</h1>
                <div class="addressformWrapper">
                    <form class="addressform mglr arow">
                        <h2 class="title-form">Add a method payment</h2>
                       
                        <input type="submit" value="Use This Address" class="btnSubmit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
