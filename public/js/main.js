        $(document).ready(function () {


            $(".date_input").pDatepicker({
                "format": "LLLL",
                "viewMode": "year",
                "initialValue": true,
                "minDate": null,
                "autoClose": true,
                "position": "auto",
                "altFormat": "YYYY/MM/DD",
                "timePicker": {
                    "enabled": false,
                    "meridiem": {
                        "enabled": true
                    }
                },
                "altField": ".date_input",
                "onlyTimePicker": false,
                "calendarType": "persian",
                "inputDelay": 800,
                "observer": false,
                "calendar": {
                    "persian": {
                        "locale": "fa",
                        "showHint": true,
                        "leapYearMode": "algorithmic"
                    },
                    "gregorian": {
                        "locale": "en",
                        "showHint": false
                    }
                },
                "navigator": {
                    "enabled": true,
                    "scroll": {
                        "enabled": true
                    },
                    "text": {
                        "btnNextText": "<",
                        "btnPrevText": ">"
                    }
                },
                "toolbox": {
                    "enabled": true,
                    "calendarSwitch": {
                        "enabled": true,
                        "format": "تغییر تقویم"
                    },
                    "todayButton": {
                        "enabled": true,
                        "text": {
                            "fa": "امروز",
                            "en": "Today"
                        }
                    },
                    "submitButton": {
                        "enabled": true,
                        "text": {
                            "fa": "تایید",
                            "en": "Submit"
                        }
                    },
                    "text": {
                        "btnToday": "امروز"
                    }
                },
                "timePicker": {
                    "enabled": false,
                    "step": 1,
                    "hour": {
                        "enabled": false,
                        "step": null
                    },
                    "minute": {
                        "enabled": false,
                        "step": null
                    },
                    "second": {
                        "enabled": false,
                        "step": null
                    },
                    "meridian": {
                        "enabled": true
                    }
                },
                "dayPicker": {
                    "enabled": true,
                    "titleFormat": "YYYY MMMM"
                },
                "monthPicker": {
                    "enabled": true,
                    "titleFormat": "YYYY"
                },
                "yearPicker": {
                    "enabled": true,
                    "titleFormat": "YYYY"
                },
                "responsive": true
            });






            setTimeout(function () {
                $('.alert').hide();
            }, 8000);

            // Restricts input for the given textbox to the given inputFilter.
            function setInputFilter(textbox, inputFilter) {
                ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
                    textbox.addEventListener(event, function () {
                        if (inputFilter(this.value)) {
                            this.oldValue = this.value;
                            this.oldSelectionStart = this.selectionStart;
                            this.oldSelectionEnd = this.selectionEnd;
                        } else if (this.hasOwnProperty("oldValue")) {
                            this.value = this.oldValue;
                            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                        }
                    });
                });
            }


            setInputFilter(document.getElementById("phoneInput"), function (value) {
                return /^\d*\.?\d*$/.test(value);
            });



        });
