	"use strict";

		var internet;

  		var id = 1, dialog;

        var callback = function () {
                cordova.plugins.notification.local.getIds(function (ids) {
                    showToast('IDs: ' + ids.join(' ,'));
                });
            };

        var showToast = function (text) {
                setTimeout(function () {
                    if (device.platform != 'windows') {
                        window.plugins.toast.showShortBottom(text);
                    } else {
                        showDialog(text);
                    }
                }, 100);
            };

        var showDialog = function (text) {
                if (dialog) {
                    dialog.content = text;
                    return;
                }

                dialog = new Windows.UI.Popups.MessageDialog(text);

                dialog.showAsync().done(function () {
                    dialog = null;
                });
            };


	class App{
		constructor(){	
			this.tempo = [];

			let request = indexedDB.open('opcoursedata', 1);
			let db = "";
			request.onsuccess = function(e){
				db = e.target.result;
			}

			request.onerror = function(e){

				console.log('Sorry not gonna happen!');
			}
			request.onupgradeneeded = function(e){
				db = e.target.result;

				if(!db.objectStoreNames.contains('userInfo')){
					let objectStore = db.createObjectStore('userInfo');

					let transaction = event.target.transaction;
					let store = transaction.objectStore("userInfo");

						let info = {
							"accountsetup":"no",
							"displayName":"",
							"userPassword":false,
							"password":"",
							"program":"",
							"programSystem":"",
							"pcode":"",
							"programDuration":"",
							"progpreview":"",
							"previewYear:":"",
							"previewTerm":"",
							"backupID":"",
							"backupPassword":"",
							"fbBackupPassword":"",
							"localNotif":true	
						}

						let requestAdd = store.add(info, 1);

					requestAdd.onsuccess = function(e){

					}

					requestAdd.onerror = function(e){

					}

				}

				if(!db.objectStoreNames.contains('availablePrograms')){
					let objectStore = db.createObjectStore('availablePrograms');

					let transaction = event.target.transaction;
					let store = transaction.objectStore("availablePrograms");

						let programs = [
							{
								"name":"Computer Science",
								"code":"CS",
								"type":"Trimestral",
								"terms":"3",
								"duration":"3",
								"addedBy:":"Default",
								"date":"20 January, 2018",
								"addedBy": "Default"
							},
							{
								"name":"Information Technology",
								"code":"IT",
								"type":"Trimestral",
								"terms":"3",
								"duration":"3",
								"addedBy:":"Default",
								"date":"20 January, 2018",
								"addedBy": "Default"
							},
							{
								"name":"Business Administration",
								"code":"BA",
								"type": "Trimestral",
								"terms":"3",
								"duration":"3",
								"addedBy:":"Default",
								"date":"20 January, 2018",
								"addedBy": "Default"
							}

						]
					let requestAdd = store.add(programs, 1);

					requestAdd.onsuccess = function(e){

					}

					requestAdd.onerror = function(e){

					}

				}

				if(!db.objectStoreNames.contains('courses2')){
					let objectStore = db.createObjectStore('courses2');

					let transaction = event.target.transaction;
					let store = transaction.objectStore("courses2");

					let courses = [

							{
								//  ------------------- 1ST YR 
								//------------------- 1ST TRI 
								"program": "CS IT BA",
								"year":1,
								"sem": 1,
								"area":"English",
								"idc":"ENGL101",
								"des": "Communication Skills 1",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 1,
								"area":"Mathematics",
								"idc":"MATH101",
								"des": "College Algebra",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":1,
								"sem": 1,
								"area":"Mathematics",
								"idc":"MATH110",
								"des": "College Trigonometry",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":1,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS101",
								"des": "Intro to Computing",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 1,
								"area":"Computer",
								"idc":"COMP101",
								"des": "Knowledge Work Software & Presentation Skills",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								},
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 1,
								"area":"Euthenics",
								"idc":"ETHNS101",
								"des": "Euthenics101",
								"prerequisite": "none",
								"unit": 0,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							//BUSINESS ADMIN
							{
								"program": "BA",
								"year":1,
								"sem": 1,
								"area":"Social Science",
								"idc":"SSCI101d",
								"des": "Society & Culture wutg FF/DA & Prevn/HIV/SARS Prevn",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":1,
								"sem": 1,
								"area":"Psychology",
								"idc":"PSYC101d",
								"des": "General Psychology",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},



							//  ------------------- 1ST YR - - - 2ND TRI ----------------------

							{
								"program": "CS IT BA",
								"year":1,
								"sem": 2,
								"area":"English",
								"idc":"ENGL102",
								"des": "Communication Skills 2",
								"prerequisite": "ENGL101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":1,
								"sem": 2,
								"area":"Psychology",
								"idc":"PYSC101",
								"des": "General Psychology",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 2,
								"area":"Filipino",
								"idc":"FILI101",
								"des": "Komunikasyon sa Akademikong Filipino",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "CS IT",
								"year":1,
								"sem": 2,
								"area":"Mathematics",
								"idc":"MATH114",
								"des": "Analytic and Solid Geometry",
								"prerequisite": "MATH101 and MATH110",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":1,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS201",
								"des": "Computer Programming 1",
								"prerequisite": "CS101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 2,
								"area":"Computer Science",
								"idc":"COMP111",
								"des": "Intro to Information Systems",
								"prerequisite": "COMP101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 2,
								"area":"Euthenics",
								"idc":"ETHNS102",
								"des": "Euthenics102",
								"prerequisite": "none",
								"unit": 0,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							//BUSINESS ADMIN
							{
								"program": "BA",
								"year":1,
								"sem": 2,
								"area":"Mathematics",
								"idc":"MATH121",
								"des": "Mathematics of Investment",
								"prerequisite": "MATH101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":1,
								"sem": 2,
								"area":"Management",
								"idc":"MGT101",
								"des": "Principles of Management",
								"prerequisite": "NONE",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":1,
								"sem": 2,
								"area":"Accounting",
								"idc":"ACGT100d",
								"des": "Fundamentals of Accounting Theory & Practice 1A w/SAP",
								"prerequisite": "MATH101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},



							//  ------------------- 1ST YR - - - 3RD TRI ----------------------

							{
								"program": "CS IT BA",
								"year":1,
								"sem": 3,
								"area":"Filipino",
								"idc":"FILI102",
								"des": "Pagbasa at Pagsulat Tungo sa Pananaliksik",
								"prerequisite": "FILI101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "CS IT",
								"year":1,
								"sem": 3,
								"area":"Political Science",
								"idc":"PSCI101",
								"des": "Philippine History, Politics, Governance & Constitution",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 3,
								"area":"English",
								"idc":"ENGL201",
								"des": "Speech Communication 1",
								"prerequisite": "ENGL102",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":1,
								"sem": 3,
								"area":"Mathematics",
								"idc":"MATH211",
								"des": "Differential Calculus",
								"prerequisite": "COREQ: MATH114",
								"unit": 4,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":1,
								"sem": 3,
								"area":"Natural Science",
								"idc":"NSCI101",
								"des": "General Chemistry",
								"prerequisite": "none",
								"unit": 4,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 3,
								"area":"Computer",
								"idc":"COMP121",
								"des": "Intro to the World Wide Web",
								"prerequisite": "COMP111",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":1,
								"sem": 3,
								"area":"Physical Education",
								"idc":"PHYED101",
								"des": "Phyiscal Fitness",
								"prerequisite": "None",
								"unit": 0,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							//BUSINESS AD
							{
								"program": "BA",
								"year":1,
								"sem": 3,
								"area":"Mathematics",
								"idc":"MATH200",
								"des": "Business Statistics",
								"prerequisite": "MATH101, 2nd Yr Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":1,
								"sem": 3,
								"area":"Accounting",
								"idc":"ACT102",
								"des": "Fundamentals of Accounting Theory & Practice 1B",
								"prerequisite": "ACGT100",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":1,
								"sem": 3,
								"area":"Management",
								"idc":"MGT211",
								"des": "Human Behavior in Organization",
								"prerequisite": "MGT101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},



							//  ------------------- 2ND YR - - - 1ST TRI ----------------------

							{
								"program": "CS IT",
								"year":2,
								"sem": 1,
								"area":"English",
								"idc":"ENGL301",
								"des": "Technical, Scientific and Business English",
								"prerequisite": "ENGL102",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":2,
								"sem": 1,
								"area":"Economics",
								"idc":"ECON101",
								"des": "Principles of Economics with Agrarian Reform & Taxation",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "CS IT",
								"year":2,
								"sem": 1,
								"area":"Social Science",
								"idc":"SSCI101",
								"des": "Society & Culture with FP/DA & Preven/HIV/SARS Preven",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},


							{
								"program": "CS IT",
								"year":2,
								"sem": 1,
								"area":"Mathematics",
								"idc":"MATH212",
								"des": "Integral Calculus",
								"prerequisite": "MATH213",
								"unit": 4,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "CS IT",
								"year":2,
								"sem": 1,
								"area":"Computer",
								"idc":"COMP134",
								"des": "Current Trends in IT (STCABS)",
								"prerequisite": "COMP121",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "CS IT",
								"year":2,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS202",
								"des": "Computer Programming 2",
								"prerequisite": "CS201",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "CS IT BA",
								"year":2,
								"sem": 1,
								"area":"Phyiscal Education",
								"idc":"PHYED111",
								"des": "Rhythmic Activities",
								"prerequisite": "None",
								"unit": 2,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":2,
								"sem": 1,
								"area":"National Service Training Program",
								"idc":"NSTP101",
								"des": "National Service Training Program 1",
								"prerequisite": "None",
								"unit": 2,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							//BUSINESS ADMIN
							{
								"program": "BA",
								"year":2,
								"sem": 1,
								"area":"Humanities",
								"idc":"HUMA101d",
								"des": "Philoshopy of Man",
								"prerequisite": "None",
								"unit": 2,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 1,
								"area":"Natural Science",
								"idc":"NSCI101",
								"des": "General Chemistry",
								"prerequisite": "None",
								"unit": 4,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 1,
								"area":"Management",
								"idc":"MGT311",
								"des": "Production and Operations Management",
								"prerequisite": "MATH101;MATH200",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 1,
								"area":"Accounting",
								"idc":"ACTG104",
								"des": "Partnership and Corporation",
								"prerequisite": "ACTG102",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 1,
								"area":"Marketing",
								"idc":"MKTG101",
								"des": "Principles of Marketing",
								"prerequisite": "MGT101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 1,
								"area":"Computer",
								"idc":"COMP131",
								"des": "Current Trends in IT",
								"prerequisite": "None",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},


							//  -------------------2ND YR - - - 2ND TRI ----------------------

							{
								"program": "CS IT",
								"year":2,
								"sem": 2,
								"area":"Humanities",
								"idc":"HUMA111",
								"des": "Art Appreciation",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":2,
								"sem": 2,
								"area":"English",
								"idc":"ENGL311",
								"des": "Philippine Literature",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":2,
								"sem": 2,
								"area":"Mathematics",
								"idc":"MATH200",
								"des": "Statistics and Probability",
								"prerequisite": "MATH101 & 2nd Yr Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":2,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS302",
								"des": "Object-Oriented Programming",
								"prerequisite": "CS201",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":2,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS301",
								"des": "Computer Programming (Web Programming & Dev't)",
								"prerequisite": "CS202",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":2,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS332",
								"des": "Computer System Org., Archtr. & Assembly Lang. Prog.",
								"prerequisite": "CS202",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":2,
								"sem": 2,
								"area":"Mathematics",
								"idc":"MATH232",
								"des": "Discrete Structures 1",
								"prerequisite": "MATH213",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":2,
								"sem": 2,
								"area":"Physical Education",
								"idc":"PHYED121",
								"des": "Individual/Dual Sports",
								"prerequisite": "none",
								"unit": 0,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":2,
								"sem": 2,
								"area":"National Service Training Program",
								"idc":"NSTP102",
								"des": "National Service Training Program 2",
								"prerequisite": "none",
								"unit": 2,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							//BUSINESS ADMIN
							{
								"program": "BA",
								"year":2,
								"sem": 2,
								"area":"Economics",
								"idc":"ECON101d",
								"des": "Principles of Economics with Agrarian Reform & Taxation",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 2,
								"area":"Financial Management",
								"idc":"FMGT10",
								"des": "Financial Management 101",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 2,
								"area":"Natural Science",
								"idc":"NSCI111d",
								"des": "College Physics 1",
								"prerequisite": "none",
								"unit": 4,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 2,
								"area":"Management",
								"idc":"MGT201",
								"des": "Human Resource Management",
								"prerequisite": "MGT101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 2,
								"area":"Business Administration",
								"idc":"BA301",
								"des": "Law on Obligations and Contracts",
								"prerequisite": "3RD YR Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},	
							{
								"program": "BA",
								"year":2,
								"sem": 2,
								"area":"Financial Management",
								"idc":"FMGT301",
								"des": "Major Course 1 - Financial Analysis & Investing",
								"prerequisite": "MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},


							//  ------------------- 2ND YR - - - 3RD TRI ----------------------
							{
								"program": "CS IT",
								"year":2,
								"sem": 3,
								"area":"Humanities",
								"idc":"HUMA101",
								"des": "Philoshopy of Man",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT",
								"year":2,
								"sem": 3,
								"area":"Natural Science",
								"idc":"NSCI111",
								"des": "College Physics 1",
								"prerequisite": "MATH101 & MATH110",
								"unit": 4,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":2,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS321",
								"des": "Data Structures & Algorithm Analysis",
								"prerequisite": "CS201",
								"unit": 4,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":2,
								"sem": 3,
								"area":"Mathematics",
								"idc":"MATH233",
								"des": "Discrete Structures 2",
								"prerequisite": "MATH232",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":2,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS377a",
								"des": "Application Lifecycle Management (HP)(Free Elective 1)",
								"prerequisite": "CS201",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":2,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS303",
								"des": "Computer Programming 4 (Mobile Programming)",
								"prerequisite": "CS201",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS IT BA",
								"year":2,
								"sem": 3,
								"area":"Physical Education",
								"idc":"PHYED131",
								"des": "Team Sports",
								"prerequisite": "none",
								"unit": 2,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							// Information Technology
							{
								"program": "IT",
								"year":2,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS342b",
								"des": "Principles of Operating Systems and its Applications",
								"prerequisite": "CS332",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "IT",
								"year":2,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS351b",
								"des": "Database Management System 1 (Oracle 10g Admin 1)",
								"prerequisite": "CS302",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":2,
								"sem": 3,
								"area":"Accounting",
								"idc":"ACTG100",
								"des": "Fundamentals of Accounting Theory & Practice 1A (SAP)",
								"prerequisite": "MATH101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":2,
								"sem": 3,
								"area":"Information Technology",
								"idc":"IT211b",
								"des": "Data Communications and Networking 1 (CISCO 1)",
								"prerequisite": "3rd Yr Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":2,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS381",
								"des": "Introduction to Multimedia/IT Major Elective 1",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							//BUSINESS ADMIN
							{
								"program": "BA",
								"year":2,
								"sem": 3,
								"area":"English",
								"idc":"ENGL301d",
								"des": "Technical, Scientific & Buiness English",
								"prerequisite": "ENGL102",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 3,
								"area":"Economics",
								"idc":"ECON102",
								"des": "Macroeconomics Theory and Practice",
								"prerequisite": "ECON101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 3,
								"area":"Business Administration",
								"idc":"BA321",
								"des": "Philippine Tax System and Income Taxation",
								"prerequisite": "3RD YR Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},				
							{
								"program": "BA",
								"year":2,
								"sem": 3,
								"area":"Financial Management",
								"idc":"FMGT302",
								"des": "Major Course 2 - Financial Markets and Institutions",
								"prerequisite": "MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 3,
								"area":"Financial Management",
								"idc":"FMGT331",
								"des": "Major Course 3 - Investment and Portfolio Management",
								"prerequisite": "MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":2,
								"sem": 3,
								"area":"Financial Management",
								"idc":"FMGT304",
								"des": "Major Course 4 - Credit and Collection",
								"prerequisite": "MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							//  ------------------- 3RD YR - - - 1ST TRI ----------------------

							{
								"program": "CS",
								"year":3,
								"sem": 1,
								"area":"Information Technology",
								"idc":"IT211a",
								"des": "Data Communications and Networking 1(CISCO)",
								"prerequisite": "3rd Yr Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 1,
								"idc":"CS311",
								"area":"Computer Science",
								"des": "Principles of Programming Languages with Compiler",
								"prerequisite": "CS321",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "CS",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS312",
								"des": "Automata and Formal Lanugage Theory",
								"prerequisite": "MATH233",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS372a",
								"des": "Intro to Software Engineering",
								"prerequisite": "CS332",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS361",
								"des": "Algorithm Analysis and Design",
								"prerequisite": "MATH233",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS378a",
								"des": "Load Testing (HP)(Free Elective 2)",
								"prerequisite": "CS377",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS304",
								"des": "Computer Programming 5 (XML in the .NET Framework)",
								"prerequisite": "CS202",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS372b",
								"des": "Intro to Software Engineering",
								"prerequisite": "CS332",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "IT",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS352",
								"des": "Database Management System 2 (Oracle 10g Admin 2)",
								"prerequisite": "CS351",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 1,
								"area":"Information Technology",
								"idc":"IT212",
								"des": "Data Communications and Networking 2 (CISCO 2)",
								"prerequisite": "IT211",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 1,
								"area":"Information Technology",
								"idc":"IT301",
								"des": "System Analysis and Design (PL/SQL Programming)",
								"prerequisite": "3rd Yr Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS411b",
								"des": "Professional Ethics in IT",
								"prerequisite": "4th Yr Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS377b",
								"des": "Application Lifecycle Management (HP)(Free Elective 1)",
								"prerequisite": "CS201",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 1,
								"area":"Computer Science",
								"idc":"CS383",
								"des": "Digital Imaging / IT Major Elective 2",
								"prerequisite": "None",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "BA",
								"year":3,
								"sem": 1,
								"area":"Humanities",
								"idc":"HUMA111d",
								"des": "Art Appreciation",
								"prerequisite": "NONE",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 1,
								"area":"Political Science",
								"idc":"PSCI101d",
								"des": "Philippine History, Politics, Governance & Constitution",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 1,
								"area":"Business Administration",
								"idc":"BA311",
								"des": "Buiness Policy with Total Quality Management",
								"prerequisite": "Graduating",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 1,
								"area":"Financial Management",
								"idc":"FMGT321",
								"des": "Major Course 5 - Corporate Finance",
								"prerequisite": "BA211",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 1,
								"area":"Financial Management",
								"idc":"FMGT306",
								"des": "Major Course 6 - Monetary Policy and Central Banking",
								"prerequisite": "3RD YR Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 1,
								"area":"Financial Management",
								"idc":"FMGT307",
								"des": "Major Course 7 - Capital Markets",
								"prerequisite": "MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},


							//  ------------------- 3RD YR - - - 2ND TRI ----------------------
							{
								"program": "CS",
								"year":3,
								"sem": 2,
								"area":"Research",
								"idc":"RSCH400",
								"des": "Research 1A",
								"prerequisite": "3rd Yr Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 2,
								"area":"Social Science",
								"idc":"SSCI111a",
								"des": "Life & Works of Jose Rizal",
								"prerequisite": "None",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS342a",
								"des": "Principles of Operating System and its Application",
								"prerequisite": "CS332",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS351a",
								"des": "Database Management System 1(Oracle 10g Admin 1)",
								"prerequisite": "CS302",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 2,
								"area":"Computer Engineering",
								"idc":"CPE202",
								"des": "Logic Design & Digital Computer Circuits",
								"prerequisite": "CS321",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS379a",
								"des": "Unified Functional Testing(HP)(Free Elective 3)",
								"prerequisite": "CS378",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS305",
								"des": "Computer Programming 6(Microsoft ADO.NET",
								"prerequisite": "CS202",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							// INFORMATION TECHNOLOGY
							{
								"program": "IT",
								"year":3,
								"sem": 2,
								"area":"Information Technology",
								"idc":"IT213",
								"des": "Data Communications and Networking 3 (CISCO 3)",
								"prerequisite": "IT212",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 2,
								"area":"Information Technology",
								"idc":"IT421",
								"des": "IT Practicum (486hrs minimum)",
								"prerequisite": "None",
								"unit": 9,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS378b",
								"des": "Load Testing(HP)(Free Elective 2)",
								"prerequisite": "CS377",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 2,
								"area":"Computer Science",
								"idc":"CS384",
								"des": "Multimedia Communication System",
								"prerequisite": "None",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							// BUSINESS ADMIN
							{
								"program": "BA",
								"year":3,
								"sem": 2,
								"area":"English",
								"idc":"ENGL311",
								"des": "Philippine Literature",
								"prerequisite": "NONE",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 2,
								"area":"Financial Management",
								"idc":"FMGT308",
								"des": "Major Course 8 - Strategic Financial Management",
								"prerequisite":"MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},				
							{
								"program": "BA",
								"year":3,
								"sem": 2,
								"area":"Financial Management",
								"idc":"FMGT322",
								"des": "Major Elective 1 - Management of Financial Institutions",
								"prerequisite":"MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},	
							{
								"program": "BA",
								"year":3,
								"sem": 2,
								"area":"Financial Management",
								"idc":"FMGT312",
								"des": "Major Elective 2 - Electronic Banking",
								"prerequisite":"MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},	
							{
								"program": "BA",
								"year":3,
								"sem": 2,
								"area":"Financial Management",
								"idc":"FMGT333",
								"des": "Major Elective 3 - Risk Analysis & Risk Management",
								"prerequisite":"MKTG101",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},	
							{
								"program": "BA",
								"year":3,
								"sem": 2,
								"area":"Financial Management",
								"idc":"FMGT311",
								"des": "Major Elective 4 - Marketing of Financial Services",
								"prerequisite":"3RD YR Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},	

							//  ------------------- 3RD YR - - - 3RD TRI ----------------------
							{
								"program": "CS",
								"year":3,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS362",
								"des": "Modeling and Simulation",
								"prerequisite": "CS321",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS411a",
								"des": "Professional Ethics in IT",
								"prerequisite": "4th Yr Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS421",
								"des": "CS Practicum (minimum 162 hrs)",
								"prerequisite": "RSCH400",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS401",
								"des": "CS Thesis",
								"prerequisite": "RSCH400",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "CS",
								"year":3,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS306",
								"des": "Computer Programming 7(Microsoft SQL Server 2005 DB",
								"prerequisite": "CS202",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							// INFORMATION TECHNOLOGY
							{
								"program": "IT",
								"year":3,
								"sem": 3,
								"area":"Information Technology",
								"idc":"IT214",
								"des": "Data Communications and Networking 4 (CISCO 4)",
								"prerequisite": "IT213",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 3,
								"area":"Social Science",
								"idc":"SSCI111b",
								"des": "Life & Works of Jose Rizal",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},

							{
								"program": "IT",
								"year":3,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS382",
								"des": "Multimedia Systems",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 3,
								"area":"Information Technology",
								"idc":"IT401",
								"des": "IT Capstone (Technopreneurship)",
								"prerequisite": "IT421",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS379b",
								"des": "Unified Functional Testing (HP)(Free Elective 3)",
								"prerequisite": "CS378",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "IT",
								"year":3,
								"sem": 3,
								"area":"Computer Science",
								"idc":"CS385",
								"des": "Multimedia Sound & Video / IT Major Elective 4",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							// BUSINESS ADMIN
							{
								"program": "BA",
								"year":3,
								"sem": 3,
								"area":"Social Science",
								"idc":"SSCI111d",
								"des": "Life & Works of Jose Rizal",
								"prerequisite": "none",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": true,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 3,
								"area":"Business Administration",
								"idc":"BA312",
								"des": "Buiness Ethics with Social Resposibility & Governance",
								"prerequisite": "Graduating",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 3,
								"area":"Financial Management",
								"idc":"FMGT342",
								"des": "Major Elective 5 - Seminars in Financial Management",
								"prerequisite": "3RD YR Standing",
								"unit": 3,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
							{
								"program": "BA",
								"year":3,
								"sem": 3,
								"area":"Business Administration",
								"idc":"BA421",
								"des": "Practicum",
								"prerequisite": "3RD YR Standing",
								"unit": 6,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"linked": false,
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							},
						]

					let requestAdd = store.add(courses, 1);
				}


				if(!db.objectStoreNames.contains('courseReminders')){
					let objectStore = db.createObjectStore('courseReminders');

					let transaction = event.target.transaction;
					let store = transaction.objectStore("courseReminders");

						let reminders = [];
						
					let requestAdd = store.add(reminders, 1);

					requestAdd.onsuccess = function(e){

					}

					requestAdd.onerror = function(e){

					}

				}



			}

		}

		render(html, component){
			component.innerHTML += html;
			// this.init();
		}

		reRender(html, component){
			component.innerHTML = html;
			//inside jquery functions
			this.init();
		}

		//new Jquery command
		reRender2(html, component){
			$(component).html(html);
			this.init();
		}

		init(){

			$('.collapsible').collapsible();
			$('.button-collapse').sideNav({
    		closeOnClick: true,
    		});
		    $(".dropdown-button").dropdown();
		    $('select').material_select();
		    $('ul.tabs').tabs();
		    $('.modal').modal();
		    $('.timepicker').pickatime({
			    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
			    twelvehour: true, // Use AM/PM or 24-hour format
			    donetext: 'OK', // text for done-button
			    cleartext: 'Clear', // text for clear-button
			    canceltext: 'Cancel', // Text function() {}or cancel-button
			    autoclose: false, // automatic close timepicker
			    ampmclickable: true, // make AM PM clickable
			    aftershow: function(){} //Function for after opening timepicker
			  });
		    $('.datepicker').pickadate({
			    selectMonths: true, // Creates a dropdown to control month
			    selectYears: 15, // Creates a dropdown of 15 years to control year,
			    today: 'Today',
			    clear: 'Clear',
			    close: 'Ok',
			    closeOnSelect: false // Close upon selecting a date,
			  }); 
		}

	currentDay(){
		let date = new Date();
		let day = date.getDay();
		let monthNum = date.getMonth();
		let month="";
		let daynum = date.getDate();

		let dayf ="";
		let dayAbb ="";
		if (day==0){
			dayf="Sunday";
			dayAbb="SU";
		}
		else if (day==1){
			dayf="Monday";
			dayAbb="M"
		}
		else if (day==2){
			dayf="Tuesday";
			dayAbb="T";
		}
		else if (day==3){
			dayf="Wednesday";
			dayAbb="W";
		}
		else if (day==4){
			dayf="Thursday";
			dayAbb="TH";

		}
		else if (day==5){
			dayf="Friday";
			dayAbb="F";
		}
		else if (day==6){
			dayf="Saturday";
			dayAbb="S"
		}

		if (monthNum ==0){
			month = "January";
		}
		else if (monthNum ==1){
			month = "February";
		}
		else if (monthNum ==2){
			month = "March";
		}
		else if (monthNum ==3){
			month = "April";
		}
		else if (monthNum ==4){
			month = "May";
		}
		else if (monthNum ==5){
			month = "June";
		}
		else if (monthNum ==6){
			month = "July";
		}
		else if (monthNum ==7){
			month = "August";
		}
		else if (monthNum ==8){
			month = "September";
		}
		else if (monthNum ==9){
			month = "October";
		}
		else if (monthNum ==10){
			month = "November";
		}
		else if (monthNum ==11){
			month = "December";
		}
		let html = `
		<div style="font-size:18px;font-weight:200;margin-bottom:-11px;">Today is</div>
		<div style="font-weight:300;letter-spacing:-1px;color:#66bb6a;">${dayf}</div>
		<hr class="center-align" style="width:60%;margin-left:20%;margin-right:20%;">
		<div style="font-size:18px;font-weight:200;">${month} ${daynum}</div>
		`;
		component.reRender2(html, '#Todaysday');

	}

	checkSetup(){

		let requestOpen = indexedDB.open('opcoursedata', 1);
			requestOpen.onsuccess = function(e){
				// console.log('Gate Open!');
				let db = e.target.result;

				var objectStore = db.transaction(['userInfo'], "readonly").objectStore('userInfo');
				let requestGet = objectStore.get(1);
				requestGet.onsuccess = function(e){
					let data = event.target.result;

					if(data.accountsetup=="yes"){
						if(data.userPassword==true){
							component.passwordPage();
						}
						else if (data.userPassword==false){
							component.studentDashboard();
							component.listHomeSched();
							component.listHomeWeekly();
						}
					}
					else{
						component.setup();
					}
				}
				requestGet.onerror = function(e){
					console('Cannot read the Setup data!');
				}


			}
			requestOpen.onerror = function(e){


			}

	}

	checkPassword(){
		let password = document.getElementById('enteredPassword').value;
		let requestOpen = indexedDB.open('opcoursedata', 1);
			requestOpen.onsuccess = function(e){
				let db = e.target.result;

				var objectStore = db.transaction(['userInfo'], "readonly").objectStore('userInfo');
				let requestGet = objectStore.get(1);
				requestGet.onsuccess = function(e){
					let data = event.target.result;
					if(password==data.password){
							component.studentDashboard();
							component.listHomeSched();
							component.listHomeWeekly();
					}
					else if(password!=data.password){
						document.getElementById('passwordIncorrect').innerHTML="Password Incorrect!";
					}
				
				}
				requestGet.onerror = function(e){
					console('Cannot read the Setup data!');
				}


			}
			requestOpen.onerror = function(e){


			}
	}
	passwordFieldShow(){
		document.getElementById('ifYes').style.display ='block';
	}
	passwordFieldHide(){
 		 document.getElementById('ifYes').style.display = 'none';
	}
	passwordFields(){
		let passwordSwitch = document.getElementById('passwordSwitch').checked;
		if(passwordSwitch == true){
 		 $('#ifYes').show();
 		 console.log("Checked");
		}
		else if (passwordSwitch==false){
			// document.getElementById('ifYes').style.display = 'none';
			$('#ifYes').hide();
			console.log("Not Checked");
		}
	}


	validateSetUp(){

		let displayName = document.getElementById('displayName').value;	
		let userPassword = $("input[type='radio'][name='usePassword']:checked").val();
		let program = $("#selectProgram option:selected").text();

		let password = document.getElementById('password').value;
		let passwordConfirm = document.getElementById('passwordConfirm').value;

		if(displayName=="" || program=="Choose your Program"){
			document.getElementById('errorInfo').innerHTML = "All fields are required."

		}
		else{
			if(password === passwordConfirm){
				component.addUser();
			}
			else {
				document.getElementById('passNotMatch').style.display ="block";
			}
		}

	}

	setupComplete(){
			//for indexedDB
			let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["userInfo"], "readwrite").objectStore("userInfo");
				let request2 = objectStore.get(1);
				
				request2.onsuccess = function(e){
					let data = event.target.result;
					data.accountsetup ="yes";
					let requestUpdate = objectStore.put(data, 1);

					requestUpdate.onsuccess = function(e){
						component.setupSuccess();
						console.log("accountsetup Successfully updated!")
					}
					requestUpdate.onerror = function(e){
						console.log("Unable to return updated data!")
					}
				}	
				request2.onerror = function(e){
					console.log("Unable to get data!");
				}
				
			}			
			request.onerror = function(e){
				console.log("Unable to open database!");
			}

	}

	addUser(){

		// let displayName = $('#displayName').val();
		// let password = $('#password').val();
		let displayName = document.getElementById('displayName').value;
		let dataPassword = document.getElementById('backupPassword').value;	
		// let fname = document.getElementById('fName').value;
		let userPassword = $("input[type='radio'][name='usePassword']:checked").val();
		if(userPassword=="yes"){
			userPassword=true;
		}
		else{
			userPassword=false;
		}

		let password = document.getElementById('password').value;
		let program = $("#selectProgram option:selected").text();
		let pcode = "none";
		let programSystem = "";
		let duration ="";
			if (program == "Computer Science"){
				pcode = "CS";
				programSystem = "Trimestral";
				duration ="3";
			}
			else if (program == "Information Technology"){
				pcode = "IT";
				programSystem = "Trimestral";
				duration ="3";
			}
			else if (program == "Business Administration"){
				pcode = "BA";
				programSystem = "Trimestral";
				duration ="3";
			}

		//for indexedDB store
		let request = indexedDB.open('opcoursedata', 1);
		let db ="";
		request.onsuccess = function(e){
				// console.log('Gate Open!');
				db = e.target.result;
				let transaction = db.transaction(['userInfo'], "readwrite");
				let objectStore = transaction.objectStore("userInfo");
				let requestGet = objectStore.get(1);

					requestGet.onsuccess = function(e){
						let data = event.target.result;
						data.displayName = displayName;
						data.userPassword = userPassword;
						data.password = password;
						data.pcode = pcode;
						data.program = program;
						data.programSystem = programSystem;
						data.programDuration = duration;
						data.backupPassword = dataPassword;
						data.userID="";

						let requestUpdate = objectStore.put(data, 1);
						requestUpdate.onsuccess = function(e){
							console.log("User Info Successfully added.")
							if(program=="Not listed on this list"){
								// component.programNotListed();
								component.addProgamSetupPage();
							}
							else{
								component.setupTips();
							}
						}
						requestUpdate.onerror = function(e){
							console.log("Error in updating user info!");
						}

					}

					requestGet.onerror = function(e){

					}

			}
		
		request.onerror = function(e){
			console.log("Unable to open the database in user info update");
		}

	}

	//For Set Up
	availableProgram(){
		let requestOpen = indexedDB.open('opcoursedata', 1);
			let db="";
			requestOpen.onsuccess = function(e){
				db = e.target.result;
				var objectStore = db.transaction(['availablePrograms'], "readonly").objectStore('availablePrograms');
				let requestGet = objectStore.get(1);

				requestGet.onsuccess = function(e){
					let data = event.target.result;
					let html =`<option value="" disabled selected>Choose your Program</option>
							   <option value="notincluded">Not listed on this list</option>
								`;
					for(let y=0;y<data.length;y++){
						html+= `
							<option value="${y}">${data[y].name}</option>
						`;
					}
					component.reRender2(html, '#selectProgram');
				}
				requestGet.onerror = function(e){
					console('Cannot read the Setup data!');
				}

			}
			requestOpen.onerror = function(e){

			}
	}

	listAvProgram(){
		let requestOpen = indexedDB.open('opcoursedata', 1);
			let db="";
			requestOpen.onsuccess = function(e){
				db = e.target.result;
				var objectStore = db.transaction(['availablePrograms'], "readonly").objectStore('availablePrograms');
				let requestGet = objectStore.get(1);

				requestGet.onsuccess = function(e){
					let data = event.target.result;
					let html =`<option value="" disabled selected>Choose your Program</option>`;
					for(let y=0;y<data.length;y++){
						html+= `
							<option value="${y}">${data[y].name}</option>
						`;
					}
					component.reRender2(html, '#listofPrograms');
				}
				requestGet.onerror = function(e){
					console('Cannot read the Setup data!');
				}

			}
			requestOpen.onerror = function(e){

			}
	}

	listAcCourse(){
		let requestOpen = indexedDB.open('opcoursedata', 1);
			let db="";
			requestOpen.onsuccess = function(e){
				db = e.target.result;
				var objectStore = db.transaction(['courses2'], "readonly").objectStore('courses2');
				let requestGet = objectStore.get(1);

				requestGet.onsuccess = function(e){
					let data = event.target.result;
					let html =` 
						<p>
							<input name="courseGroup" type="radio" value="Independent" id="-1" />
							<label class="truncate" for="-1">Independent</label>
						</p>
					`;
					for(let y=0;y<data.length;y++){
						if(data[y].stat=="INPROGRESS"){
							html+= `
																	
									<p>
										<input name="courseGroup" type="radio" value="${data[y].idc}" id="${y}" />
										<label class="truncate" for="${y}">${data[y].idc}</label>
									</p>
							`;
						}
					}
					component.reRender2(html, '#modal20Content');
				}
				requestGet.onerror = function(e){
					console('Cannot read the Setup data!');
				}

			}
			requestOpen.onerror = function(e){

			}

	}

	addList(courses){
		// let mySelectedCourse = {
		// 	"program":courses.program, 
		// 	"year":courses.year,
		// 	"sem":courses.sem,
		// 	"idc":courses.idc, 
		// 	"des":courses.des, 
		// 	"prerequisite":courses.prerequisite,
		// 	"unit":courses.unit,
		// 	"stat": "INPROGRESS",
		// 	"schedule":{
		// 			"M":courses.schedule.M,
		// 			"T":courses.schedule.T,
		// 			"W":courses.schedule.W,
		// 			"TH":courses.schedule.TH,
		// 			"F":courses.schedule.F,
		// 			"S":courses.schedule.S
		// 			}
		// };
		// this.myAddedCourses.push(mySelectedCourse);
		}

	addComplete(courses){
		let myCompletedCourse = {"program":courses.program, "courses.year":courses.year,"sem":courses.sem,"idc":courses.idc, "des":courses.des};
		this.completedCourses.push(myCompletedCourse);
		}

	// restriction for re-adding
	searchIsAdded(){
			// let result = "";
			// let courseID = this.courses[i].idc;			
			// for(let j=0;j<this.myAddedCourses.length;j++){
			// 	if(courseID==this.myAddedCourses[j].idc){
			// 		result = "disabled";
			// 		break;
			// 	}
			// }
			// return result;
	}
	// restriction for re-adding complete
	searchIsCompleted(){
			// let result = "";
			// let courseID = this.courses[i].idc;			
			// for(let j=0;j<this.completedCourses.length;j++){
			// 	if(courseID==this.completedCourses[j].idc){
			// 		result = "disabled";
			// 		break;
			// 	}
			// }
			// return result;
	}

	deactivateAddButton(i){

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;

					let objectStore = db.transaction(["courses2"], "readwrite").objectStore("courses2");
					let requestGETCOURSES = objectStore.get(1);

					requestGETCOURSES.onsuccess = function(e){
					let data = event.target.result;
							// component.addList(courses[i]);
							data[i].stat = "INPROGRESS";
							let requestUpdate = objectStore.put(data, 1);

							requestUpdate.onsuccess = function(e){
								Materialize.toast('Course added as in progress.', 1200);
								let btnID = "#"+data[i].idc+"-btnAddList"+i;
								let btnComplete = `#btnComplete${i}`;
								$(btnID).removeClass("waves-effect waves-light submit").addClass('disabled');
								$(btnComplete).removeClass("waves-effect waves-light submit").addClass('disabled');

							}
							requestUpdate.onerror = function(e){
								console.log("Unable to return updated data!")
							}

					}//requestGETCOURSES.closing
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}//Open database request closing brace

	}

	deactivateDoneButton(i){

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;

					let objectStore = db.transaction(["courses2"], "readwrite").objectStore("courses2");
					let requestGETCOURSES = objectStore.get(1);

					requestGETCOURSES.onsuccess = function(e){
					let data = event.target.result;
							// component.addList(courses[i]);
							data[i].stat = "COMPLETE";
							let requestUpdate = objectStore.put(data, 1);
							requestUpdate.onsuccess = function(e){
								// this.addComplete(this.courses[i]);
								let mainCourseID ="";
								if(data[i].linked==true){
									let idLength = data[i].idc.length -1;
									for(let j=0;j<idLength;j++){
										mainCourseID += data[i].idc.charAt(j);
										console.log("1st loop");
									}

									for(let y=0;y<data.length;y++){
										if(data[y].idc.includes(mainCourseID)){
											data[y].stat = "COMPLETE";
											requestUpdate = objectStore.put(data, 1);
											requestUpdate.onsuccess = function(e){
											console.log("linked course updated!");
											}
											
										}

									}
									console.log("Congrats!")

								}

								Materialize.toast('Course added as completed.', 1200);
								let btnID = `#btnComplete${i}`;
								let btnAdd = "#"+data[i].idc+"-btnAddList"+i;
								$(btnID).removeClass("waves-effect waves-light submit").addClass('disabled');
								$(btnAdd).removeClass("waves-effect waves-light submit").addClass('disabled');

							}
							requestUpdate.onerror = function(e){
								console.log("Unable to return updated data!")
							}

					}//requestGETCOURSES.closing
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}//Open database request closing brace

	}

	moveInprogress(y){
			let x=y;

			//for indexedDB
			let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["courses2"], "readwrite").objectStore("courses2");
				let request2 = objectStore.get(1);
				
				request2.onsuccess = function(e){
					let data = event.target.result;
					data[x].stat ="INPROGRESS";
					let requestUpdate = objectStore.put(data, 1);

					requestUpdate.onsuccess = function(e){
						Materialize.toast('Status changed to INPROGRESS', 3000);
					}
					requestUpdate.onerror = function(e){
						console.log("Unable to return updated data!")
					}
				}	
				request2.onerror = function(e){
					console.log("Unable to get data!");
				}
			}			
			request.onerror = function(e){
				console.log("Unable to open database!");
			}
		
	}
	moveComplete(y){
		let x=y;
			//for indexedDB
			let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["courses2"], "readwrite").objectStore("courses2");
				let request2 = objectStore.get(1);
				
				request2.onsuccess = function(e){
					let data = event.target.result;
					data[x].stat ="COMPLETE";
					let requestUpdate = objectStore.put(data, 1);

					requestUpdate.onsuccess = function(e){
						Materialize.toast('Status changed to COMPLETED', 3000);
					}
					requestUpdate.onerror = function(e){
						console.log("Unable to return updated data!")
					}
				}	
				request2.onerror = function(e){
					console.log("Unable to get data!");
				}
			}			
			request.onerror = function(e){
				console.log("Unable to open database!");
			}
	}
	moveDefault(y){
			let x=y;
			//for indexedDB
			let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["courses2"], "readwrite").objectStore("courses2");
				let request2 = objectStore.get(1);
				
				request2.onsuccess = function(e){
					let data = event.target.result;
					data[x].stat ="NOT TAKEN";
					let requestUpdate = objectStore.put(data, 1);

					requestUpdate.onsuccess = function(e){
						Materialize.toast('Status changed to COMPLETED', 3000);
					}
					requestUpdate.onerror = function(e){
						console.log("Unable to return updated data!")
					}
				}	
				request2.onerror = function(e){
					console.log("Unable to get data!");
				}
			}			
			request.onerror = function(e){
				console.log("Unable to open database!");
			}
	}

	viewFirstCourses(){
		let userProgram ="";
		let courses = [];

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
				let requestGET = objectStore.get(1);

					requestGET.onsuccess = function(e){
						let data = event.target.result;
						userProgram = data.pcode;
					}
					requestGET.onerror = function(e){

					}
					requestGET.oncomplete = function(e){

					}

					objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
					let requestGETCOURSES = objectStore.get(1);

					requestGETCOURSES.onsuccess = function(e){
					let data = event.target.result;
					courses = data;

							let html = ` 
						
							`;
								// document.getElementById("ProgYear").innerHTML = "1st Year Courses";
								let year=1;
								let checkboxID = 0;
								let courseTime = 1000;
								let meridian = 2000;

								for (let semNum=1;semNum<=3;semNum++){
											if (semNum>1){
												if (semNum==2){
												html+= ` 
												</ul>

												<div class="col s12 midhead">
												         2nd Trimester
												 </div>
												 <br><br>
							  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">
												`;
												}

												else if (semNum==3){
												html+= ` 
												</ul>
												<div class="col s12 midhead">
												         3rd Trimester
												 </div>
												 <br><br>
							  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">
												`;
												}

											}

							 	for (let i=0;i<courses.length;i++){
							 		console.log("IM HERE!");
							 		if(courses[i].year==year && courses[i].sem==semNum){ 
							 				if(courses[i].program.includes(userProgram)){
															 html+=`

															 <li>
															 	<div style="border-left:0;border-right:0;padding-top:3px;" class="truncate collapsible-header home-accordion"><i style="font-size:18px;" class="fa fa-tag" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
																    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																	    


															 	    
																	        <center style="letter-spacing:1px;">You may select one<center>
																<form action="#">
																	`; 


																let ischeckedM = "";
																let isDisabledM = "";
																if(courses[i].schedule.M==true){
																	ischeckedM = "checked";
																	isDisabledM = "disabled";
																}

																let ischeckedT = "";
																let isDisabledT = "";
																if(courses[i].schedule.T==true){
																	ischeckedT = "checked";
																	isDisabledT = "disabled";
																}		
																			
																let ischeckedW = "";
																let isDisabledW = "";
																if(courses[i].schedule.W==true){
																	ischeckedW = "checked";
																	isDisabledW = "disabled";
																}				
																			
																let ischeckedTH = "";
																let isDisabledTH = "";
																if(courses[i].schedule.TH==true){
																	ischeckedTH = "checked";
																	isDisabledTH = "disabled";
																}					
																			
																let ischeckedF = "";
																let isDisabledF = "";
																if(courses[i].schedule.F==true){
																	ischeckedF = "checked";
																	isDisabledF = "disabled";
																}						
																			
																let ischeckedS = "";
																let isDisabledS = "";
																if(courses[i].schedule.S==true){
																	ischeckedS = "checked";
																	isDisabledS = "disabled";
																}						

													 let isAdded = component.searchIsAdded();
													 let isCompleted = component.searchIsCompleted();
													 
													 if(isAdded=="disabled"){
													 	isCompleted = "disabled";
													 }

													 if(isCompleted=="disabled"){
													 	isAdded = "disabled";
													 }


														html += `
										  				</form>

										  				
															<div>
													              <div  class="col s6 select-button"><center><a id="${courses[i].idc}-btnAddList${i}" class="waves-effect waves-light btn ${isAdded} checkSubmit" onclick="component.deactivateAddButton(${i})">Add</a></center>
													              </div>

													              <div  class="col s6 select-button"><center><a id="btnComplete${i}" class="waves-effect waves-light btn ${isCompleted}" onclick="component.deactivateDoneButton(${i})">Done</a></center>
													              </div>
													        </div>
													         </div>	

													     </li>
													      `;
									}

					// 				else if (courses[i].program.includes(pcode)){
					// 				html+=`
					// 						 	<li style="boder:none;"> 
					// 						        <div style="border-left:none;border-right:none;" class="truncate collapsible-header home-accordion"><i class="fa fa-tag" aria-hidden="true"></i>${this.courses[i].idc} ${this.courses[i].des}</div>
					// 						          <div class="collapsible-body row" style="background-color:#ef9a9a;padding-top:11px;padding-bottom:10px;margin-bottom:0;" >
													        
					// 								        <center style="letter-spacing:1px;">You may select one<center>
					// 							<form action="#">
					// 								`; 


					// 							let ischeckedM = "";
					// 							let isDisabledM = "";
					// 							if(this.courses[i].schedule.M==true){
					// 								ischeckedM = "checked";
					// 								isDisabledM = "disabled";
					// 							}

					// 							let ischeckedT = "";
					// 							let isDisabledT = "";
					// 							if(this.courses[i].schedule.T==true){
					// 								ischeckedT = "checked";
					// 								isDisabledT = "disabled";
					// 							}		
															
					// 							let ischeckedW = "";
					// 							let isDisabledW = "";
					// 							if(this.courses[i].schedule.W==true){
					// 								ischeckedW = "checked";
					// 								isDisabledW = "disabled";
					// 							}				
															
					// 							let ischeckedTH = "";
					// 							let isDisabledTH = "";
					// 							if(this.courses[i].schedule.TH==true){
					// 								ischeckedTH = "checked";
					// 								isDisabledTH = "disabled";
					// 							}					
															
					// 							let ischeckedF = "";
					// 							let isDisabledF = "";
					// 							if(this.courses[i].schedule.F==true){
					// 								ischeckedF = "checked";
					// 								isDisabledF = "disabled";
					// 							}						
															
					// 							let ischeckedS = "";
					// 							let isDisabledS = "";
					// 							if(this.courses[i].schedule.S==true){
					// 								ischeckedS = "checked";
					// 								isDisabledS = "disabled";
					// 							}						

					// 				 let isAdded = this.searchIsAdded(i);
					// 				 let isCompleted = this.searchIsCompleted(i);
									 
					// 				 if(isAdded=="disabled"){
					// 				 	isCompleted = "disabled";
					// 				 }

					// 				 if(isCompleted=="disabled"){
					// 				 	isAdded = "disabled";
					// 				 }


					// 					html += `
					// 	  				</form>

						  				
					// 						<div>
					// 				              <div  class="col s6 select-button"><center><a id="${this.courses[i].idc}-btnAddList${i}" class="waves-effect waves-light btn ${isAdded} checkSubmit" onclick="component.deactivateAddButton(${i})">Add</a></center>
					// 				              </div>

					// 				              <div  class="col s6 select-button"><center><a id="btnComplete${i}" class="waves-effect waves-light btn ${isCompleted}" onclick="component.deactivateDoneButton(${i})">Done</a></center>
					// 				              </div>
					// 				        </div>
					// 				         </div>	

					// 				     </li>
					// 	`;

					// }

							 }// outer if closing
							      
							//  else {
							// 	continue;
							// }
							 	} //inner loop close bracket
							 } // loop close bracket
							 component.reRender2(html,'#listOfCourses');

					}//requestGETCOURSES.closing
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}
									
	}

	viewSecondCourses(){
		let userProgram ="";
		let courses = [];

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
				let requestGET = objectStore.get(1);

					requestGET.onsuccess = function(e){
						let data = event.target.result;
						userProgram = data.pcode;
						console.log(userProgram);
					}
					requestGET.onerror = function(e){

					}
					requestGET.oncomplete = function(e){

					}

					objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
					let requestGETCOURSES = objectStore.get(1);

					requestGETCOURSES.onsuccess = function(e){
					let data = event.target.result;
					courses = data;

							let html = ` 
							
								`;
									document.getElementById("ProgYear").innerHTML = "2nd Year Courses";

									let year=2;
									let checkboxID = 0;
									for (let semNum=1;semNum<=3;semNum++){
										if (semNum>1){
											if (semNum==2){
											html+= ` 
											</ul>

											<div class="col s12 midhead">
											         2nd Trimester
											 </div>
											 <br><br>
						  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">

											`;
											}

											else if (semNum==3){
											html+= ` 
											</ul>
											<div class="col s12 midhead">
											         3rd Trimester
											 </div>
											 <br><br>
						  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">
											`;
											}

										}

								 	for (let i=0;i<courses.length;i++){
								 		
								 		if(courses[i].year==year && courses[i].sem==semNum){
												 		if(courses[i].program.includes(userProgram)){

														 		html+=`
														 		<li>
														        <div style="border-left:0;border-right:0;padding-top:8px;padding-top:3px;" class="collapsible-header home-accordion truncate"><i style="font-size:18px;" class="fa fa-tag" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
														          <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																        
																        <center style="letter-spacing:1px;">Add Weekly Schedule<center>
															<form action="#">
																`; 


																let ischeckedM = "";
																let isDisabledM = "";
																if(courses[i].schedule.M==true){
																	ischeckedM = "checked";
																	isDisabledM = "disabled";
																}

																let ischeckedT = "";
																let isDisabledT = "";
																if(courses[i].schedule.T==true){
																	ischeckedT = "checked";
																	isDisabledT = "disabled";
																}		
																			
																let ischeckedW = "";
																let isDisabledW = "";
																if(courses[i].schedule.W==true){
																	ischeckedW = "checked";
																	isDisabledW = "disabled";
																}				
																			
																let ischeckedTH = "";
																let isDisabledTH = "";
																if(courses[i].schedule.TH==true){
																	ischeckedTH = "checked";
																	isDisabledTH = "disabled";
																}					
																			
																let ischeckedF = "";
																let isDisabledF = "";
																if(courses[i].schedule.F==true){
																	ischeckedF = "checked";
																	isDisabledF = "disabled";
																}						
																			
																let ischeckedS = "";
																let isDisabledS = "";
																if(courses[i].schedule.S==true){
																	ischeckedS = "checked";
																	isDisabledS = "disabled";
																}						

																 let isAdded = component.searchIsAdded(i);
																 let isCompleted = component.searchIsCompleted(i);
																 
																 if(isAdded=="disabled"){
																 	isCompleted = "disabled";
																 }

																 if(isCompleted=="disabled"){
																 	isAdded = "disabled";
																 }


															html += `
											  				</form>

											  				
																<div>
														              <div  class="col s6 select-button"><center><a id="${courses[i].idc}-btnAddList${i}" class="waves-effect waves-light btn ${isAdded} checkSubmit" onclick="component.deactivateAddButton(${i}),component.checkboxValue(this)">Add</a></center>
														              </div>
														              <div  class="col s6 select-button"><center><a id="btnComplete${i}" class="waves-effect waves-light btn ${isCompleted}" onclick="component.deactivateDoneButton(${i})">Done</a></center>
														              </div>
														        </div>
														          </div>

														      </li>
														      `;
														  }


								      }
								      
								      else {
								      	continue;
								      }

								 	} //inner loop close bracket
								 } // loop close bracket
								 component.reRender2(html, '#listOfCourses');
					}//requestGETCOURSES.closing
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}//Open database onsuccess closing

		} 

	viewThirdCourses(){

		let userProgram ="";
		let courses = [];

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
				let requestGET = objectStore.get(1);

					requestGET.onsuccess = function(e){
						let data = event.target.result;
						userProgram = data.pcode;
						console.log(userProgram);
					}
					requestGET.onerror = function(e){

					}
					requestGET.oncomplete = function(e){

					}

					objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
					let requestGETCOURSES = objectStore.get(1);

					requestGETCOURSES.onsuccess = function(e){
					let data = event.target.result;
					courses = data;

							let html = ` 
							
								`;
									document.getElementById("ProgYear").innerHTML = "3rd Year Courses";

									let year=3;
									let checkboxID = 0;
									for (let semNum=1;semNum<=3;semNum++){
										if (semNum>1){
											if (semNum==2){
											html+= ` 
											</ul>
											<div class="col s12 midhead">
											         2nd Trimester
											 </div>
											 <br><br>
						  	 					<ul style="border:none;" class="collapsible excessAccordion" data-collapsible="accordion">
											`;
											}

											else if (semNum==3){
											html+= ` 
											</ul>
											<div class="col s12 midhead">
											         3rd Trimester
											 </div>
											 <br><br>
						  	 					<ul style="border:none;" class="collapsible excessAccordion" data-collapsible="accordion">
											`;
											}

										}

								 	for (let i=0;i<courses.length;i++){
								 		
								 		if(courses[i].year==year && courses[i].sem==semNum){
								 			if(courses[i].program.includes(userProgram)){
								 		
														 		html+=`
														 		<li>
														        <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><i style="font-size:18px;" class="fa fa-tag" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
														          <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																        
																        <center style="letter-spacing:1px;">Add Weekly Schedule<center>
															<form action="#">
																`; 


																let ischeckedM = "";
																let isDisabledM = "";
																if(courses[i].schedule.M==true){
																	ischeckedM = "checked";
																	isDisabledM = "disabled";
																}

																let ischeckedT = "";
																let isDisabledT = "";
																if(courses[i].schedule.T==true){
																	ischeckedT = "checked";
																	isDisabledT = "disabled";
																}		
																			
																let ischeckedW = "";
																let isDisabledW = "";
																if(courses[i].schedule.W==true){
																	ischeckedW = "checked";
																	isDisabledW = "disabled";
																}				
																			
																let ischeckedTH = "";
																let isDisabledTH = "";
																if(courses[i].schedule.TH==true){
																	ischeckedTH = "checked";
																	isDisabledTH = "disabled";
																}					
																		
																let ischeckedF = "";
																let isDisabledF = "";
																if(courses[i].schedule.F==true){
																	ischeckedF = "checked";
																	isDisabledF = "disabled";
																}						
																			
																let ischeckedS = "";
																let isDisabledS = "";
																if(courses[i].schedule.S==true){
																	ischeckedS = "checked";
																	isDisabledS = "disabled";
																}						


																 let isAdded = component.searchIsAdded(i);
																 let isCompleted = component.searchIsCompleted(i);
																 
																 if(isAdded=="disabled"){
																 	isCompleted = "disabled";
																 }

																 if(isCompleted=="disabled"){
																 	isAdded = "disabled";
																 }

															html += `
											  				</form>

											  				
																<div>
														              <div  class="col s6 select-button"><center><a id="${courses[i].idc}-btnAddList${i}" class="waves-effect waves-light btn ${isAdded} checkSubmit" onclick="component.deactivateAddButton(${i}),component.checkboxValue(this)">Add</a></center>
														              </div>
														              <div  class="col s6 select-button"><center><a id="btnComplete${i}" class="waves-effect waves-light btn ${isCompleted}" onclick="component.deactivateDoneButton(${i})">Done</a></center>
														              </div>
														        </div>
														       </div>

														      </li>
														      `;
											}
												
								      }
								      
								      else {
								      	continue;
								      }

								 	} //inner loop close bracket
								 } // loop close bracket
								 component.reRender2(html, '#listOfCourses')
					}//requestGETCOURSES.closing
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}//Open database onsuccess closing
		} 

	checkCourses(){
		let code="";
		//for indexedDB
			let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;

							let objectStore2 = db.transaction(["userInfo"], "readwrite").objectStore("userInfo");
							let requestUserInfo = objectStore2.get(1);
								requestUserInfo.onsuccess = function(e){
										let userData = event.target.result;
										userData.progpreview = code;
										console.log(userData.progpreview);
										let requestUpdate = objectStore2.put(userData, 1);

											requestUpdate.onsuccess = function(e){
													component.viewAvailablePrograms();
													component.peekFirstYear();
													Materialize.showStaggeredList('#peekListOfCourses');
												}
								}

			}			
		request.onerror = function(e){
			console.log("Unable to open database!");
		}

	}
	
	previousList(y){

		let userProgPreview ="";
		let courses = [];

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;

					let objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGETCOURSES = objectStore.get(1);

						requestGETCOURSES.onsuccess = function(e){
						let data = event.target.result;
						courses = data;
								if(courses[y].year==1){
									component.viewAvailablePrograms();
									component.peekFirstYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}
								else if (courses[y].year==2){
									component.viewAvailablePrograms();
									component.peekSecondYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}
								else if (courses[y].year==3){
									component.viewAvailablePrograms();
									component.peekThirdYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}

					}//requestGETCOURSES.onsuccess end brace
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}//requestOpen.onsuccess end brace

	}
	
	previousListIT(y){

		let userProgPreview ="";
		let courses = [];

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;

					let objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGETCOURSES = objectStore.get(1);

						requestGETCOURSES.onsuccess = function(e){
						let data = event.target.result;
						courses = data;
								if(courses[y].year==1){
									component.viewAvailablePrograms();
									component.peekFirstYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}
								else if (courses[y].year==2){
									component.viewAvailablePrograms();
									component.peekSecondYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}
								else if (courses[y].year==3){
									component.viewAvailablePrograms();
									component.peekThirdYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}

					}//requestGETCOURSES.onsuccess end brace
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}//requestOpen.onsuccess end brace

	}
	previousListBA(y){

		let userProgPreview ="";
		let courses = [];

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;

					let objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGETCOURSES = objectStore.get(1);

						requestGETCOURSES.onsuccess = function(e){
						let data = event.target.result;
						courses = data;
								if(courses[y].year==1){
									component.viewAvailablePrograms();
									component.peekFirstYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}
								else if (courses[y].year==2){
									component.viewAvailablePrograms();
									component.peekSecondYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}
								else if (courses[y].year==3){
									component.viewAvailablePrograms();
									component.peekThirdYear();
									Materialize.showStaggeredList('#peekListOfCourses');
								}

					}//requestGETCOURSES.onsuccess end brace
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}//requestOpen.onsuccess end brace

	}

	addGrade(y){

		let request = indexedDB.open('opcoursedata', 1);
		let db="";

		request.onsuccess = function(e){
			db = e.target.result;

				let transaction = db.transaction(['courses2'], "readwrite");
				let objectStore = transaction.objectStore('courses2');
				let requestGet = objectStore.get(1);
					requestGet.onsuccess = function(e){
						let data = event.target.result;
						data[y].grade = $("input[type='radio'][name='group1']:checked").val();
						Materialize.toast('The grade is added.', 3000);
						let requestUpdate = objectStore.put(data, 1);
						requestUpdate.onsuccess = function(e){
							console.log("User Info Successfully added.")
						}
						requestUpdate.onerror = function(e){
							console.log("Error in updating user info!");
						}

					}

					requestGet.onerror = function(e){

					}
		}
		request.onerror = function(e){


		}

	}
	
	saveCourseTime(index){
		let y=index;
		//for indexedDB
			let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["courses2"], "readwrite").objectStore("courses2");
				let request2 = objectStore.get(1);
				
				request2.onsuccess = function(e){
					let data = event.target.result;
					data[y].schedule.M = document.getElementById('monday').value;
					data[y].schedule.T = document.getElementById('tuesday').value;
					data[y].schedule.W = document.getElementById('wednesday').value;
					data[y].schedule.TH = document.getElementById('thursday').value;
					data[y].schedule.F = document.getElementById('friday').value;
					data[y].schedule.S = document.getElementById('saturday').value;
					data[y].schedule.SU = document.getElementById('sunday').value;
					let requestUpdate = objectStore.put(data, 1);

					requestUpdate.onsuccess = function(e){
						component.studentDashboard();
					}
					requestUpdate.onerror = function(e){
						console.log("Unable to return updated data!")
					}
				}	
				request2.onerror = function(e){
					console.log("Unable to get data!");
				}
				
			}			
			request.onerror = function(e){
				console.log("Unable to open database!");
			}

	}

	displayQuickSelectCourses(){
		//render courses from user program
		let whatYear = $("#viewCourseYear option:selected").text();
		let whatYearNum = whatYear.charAt(0);
		if(whatYearNum==""){
			whatYearNum=1;
			whatYear="1st Year";
		};
		let userProgram ="";
		let userProgDuration ="";
		let userProgCode ="";
		let userProgSystem="";
		let termsPerYear=0;
		let systemWord ="";
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
				let requestGET = objectStore.get(1);

					requestGET.onsuccess = function(e){
						let data = event.target.result;
						userProgram = data.program;
						userProgDuration = data.programDuration;
						userProgCode = data.pcode;
						userProgSystem = data.programSystem;
							if(userProgSystem == "Trimestral"){
								termsPerYear=3;
								systemWord="Trimester";
							}
							else if (userProgSystem == "Semestral"){
								termsPerYear=2;
								systemWord="Semester";
							}
						document.getElementById('myprogram').innerHTML = userProgCode + " Courses";
						document.getElementById('peekProgYear').innerHTML= whatYear + " Courses";
						let objectStore2 = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGetCOURSES = objectStore2.get(1);


						requestGetCOURSES.onsuccess = function(e){
						let courses = event.target.result;
						let html =``;
							for (let semNum=1;semNum<=termsPerYear;semNum++){
									// if(semNum==1){
									// 	document.getElementById('firstTerm').innerHTML= semNum+"st "+systemWord;
									// }
									if (semNum>1){
										if (semNum==2){
										html+= ` 
										</ul>

										<div class="col s12 midhead">
										         2nd ${systemWord}
										 </div>
										 <br><br>
					  	 					<ul style="border:none;" class="collapsible excessAccordion" data-collapsible="accordion">
										`;
										}

										else if (semNum==3){
										html+= ` 
										</ul>
										<div class="col s12 midhead">
										         3rd Trimester
										 </div>
										 <br><br>
					  	 					<ul style="border:none;" class="collapsible excessAccordion" data-collapsible="accordion">
										`;
										}
									}

						 	for (let i=0;i<courses.length;i++){
						 		if(courses[i].year==whatYearNum && courses[i].sem==semNum){ 
						 				if(courses[i].program.includes(userProgCode)){
						 							console.log(userProgCode);

												 html+=`

												 <li>
												 	<div style="border-left:0;border-right:0;padding-top:3px;" class="truncate collapsible-header home-accordion"><i style="font-size:18px;" class="fa fa-tag" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
													    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
														    


												 	    
														        <center style="letter-spacing:1px;margin-bottom:15px;">Currently enrolled to this course?<center>
													<form action="#">
														`; 


													let ischeckedM = "";
													let isDisabledM = "";
													if(courses[i].schedule.M==true){
														ischeckedM = "checked";
														isDisabledM = "disabled";
													}

													let ischeckedT = "";
													let isDisabledT = "";
													if(courses[i].schedule.T==true){
														ischeckedT = "checked";
														isDisabledT = "disabled";
													}		
																
													let ischeckedW = "";
													let isDisabledW = "";
													if(courses[i].schedule.W==true){
														ischeckedW = "checked";
														isDisabledW = "disabled";
													}				
																
													let ischeckedTH = "";
													let isDisabledTH = "";
													if(courses[i].schedule.TH==true){
														ischeckedTH = "checked";
														isDisabledTH = "disabled";
													}					
																
													let ischeckedF = "";
													let isDisabledF = "";
													if(courses[i].schedule.F==true){
														ischeckedF = "checked";
														isDisabledF = "disabled";
													}						
																
													let ischeckedS = "";
													let isDisabledS = "";
													if(courses[i].schedule.S==true){
														ischeckedS = "checked";
														isDisabledS = "disabled";
													}						

										 let isAdded = component.searchIsAdded();
										 let isCompleted = component.searchIsCompleted();
										 
										 if(isAdded=="disabled"){
										 	isCompleted = "disabled";
										 }

										 if(isCompleted=="disabled"){
										 	isAdded = "disabled";
										 }


											html += `
							  				</form>

							  				
												<div>

										              <div  class="col s12 select-button"><center><a id="${courses[i].idc}-btnAddList${i}" style="width:50%;" class="waves-effect waves-light btn ${isAdded} checkSubmit" onclick="component.deactivateAddButton(${i})">Add</a></center>
										              </div>

													   <center style="letter-spacing:1px;margin-bottom:15px;margin-top:20px;">Already completed this course?<center>
										              <div  class="col s12 select-button"><center><a id="btnComplete${i}" style="width:50%;" class="waves-effect waves-light btn ${isCompleted}" onclick="component.deactivateDoneButton(${i})">Done</a></center>
										              </div>
										        </div>
										         </div>	

										     </li>
										      `;

										}

									else {
										continue;

									}

						 	}
						      
							 else {
							      	continue;
							      }
							 	} //inner loop close bracket
							 } // loop close bracket
						 
						 component.reRender2(html, '#listOfCourses');
						 Materialize.fadeInImage('#listOfCourses');
						 Materialize.showStaggeredList('#listOfCourses');


						}//Request GET COURSES


					}//Request get USER INFO

				}//Request Open DB

	}

	displayMyCourses(y, option){
		//render courses from user program
		let backOption = option;
		let whatYear = $("#viewCourseYear option:selected").text();
		let whatYearNum = whatYear.charAt(0);
		if(whatYearNum==""){
			whatYearNum=1;
			whatYear="1st Year";
		};
		let userProgram ="";
		let userProgDuration ="";
		let userProgCode ="";
		let userProgSystem="";
		let termsPerYear=0;
		let systemWord ="";
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
				let requestGET = objectStore.get(1);

					requestGET.onsuccess = function(e){
						let data = event.target.result;
						userProgram =data.program;
						userProgDuration=data.programDuration;
						userProgCode = data.pcode;
						userProgSystem = data.programSystem;
							if(userProgSystem == "Trimestral"){
								termsPerYear=3;
								systemWord="Trimester";
							}
							else if (userProgSystem == "Semestral"){
								termsPerYear=2;
								systemWord="Semester";
							}
						document.getElementById('myprogram').innerHTML = userProgram;
						document.getElementById('peekProgYear').innerHTML=whatYear + " Courses";
						let objectStore2 = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGetCOURSES = objectStore2.get(1);


						requestGetCOURSES.onsuccess = function(e){
						let courses = event.target.result;
						let html =``;
							for (let semNum=1;semNum<=termsPerYear;semNum++){
									// if(semNum==1){
									// 	document.getElementById('firstTerm').innerHTML= semNum+"st "+systemWord;
									// }
									if (semNum>1){
										if (semNum==2){
										html+= ` 
										</ul>

										<div class="col s12 midhead">
										         2nd ${systemWord}
										 </div>
										 <br><br>
					  	 					<ul style="border:none;" class="collapsible excessAccordion" data-collapsible="accordion">
										`;
										}

										else if (semNum==3){
										html+= ` 
										</ul>
										<div class="col s12 midhead">
										         3rd Trimester
										 </div>
										 <br><br>
					  	 					<ul style="border:none;" class="collapsible excessAccordion" data-collapsible="accordion">
										`;
										}

									}

						 	for (let i=0;i<courses.length;i++){
						 		
						 		if(courses[i].year==whatYearNum && courses[i].sem==semNum){ 
						 				if(courses[i].program.includes(userProgCode)){
						 							if(courses[i].stat=="INPROGRESS"){
														 html+=`
														 <li style="boder:none;"> 
														    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion-inprogress truncate"><i style="font-size:16px;" class="fa fa-hourglass-half" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
															    <div class="collapsible-body row" style="background-color:#a5d6a7;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																    <div style="font-size:11px;text-align:center;">
																	 		<div class="col s6">
																		 		<span"><b>Course Code</b></span></br>
																		 		${courses[i].idc}

																	 		</div>
																	 		<div class="col s6">
																		 		<span><b>Course Description</b></span></br>
																		 		${courses[i].des}
																		 	</div>
																	</div>
																	<div style="font-size:11px;text-align:center;">
																	 		<div class="col s12" style="margin-top:20px;">
																			 	<div class="col s6">
																			 		<span"><b>Course Units</b></span></br>
																			 		${courses[i].unit}

																		 		</div>
																		 		<div class="col s6">
																			 		<span><b>Pre-requisite</b></span></br>
																			 		${courses[i].prerequisite}
																			 	</div>
																		 	</div>
																		<a style="font-size:10px;" id="${i}" onclick="component.singleCoursePage(${y}, this, ${backOption})" href="#goUp" class="waves-effect waves-light btn"><span>View Course</span></a>
																	</div>
																</div>
															</div>
									 					</li>
												      `;
												    }
												    else if (courses[i].stat=="COMPLETE"){
												    	html+=`
														 <li style="boder:none;"> 
														    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion-completed truncate"><span class="new badge" data-badge-caption="">${courses[i].grade}</span><i style="color:#a5d6a7;" class="fa fa-check" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
															    <div class="collapsible-body row" style="background-color:#b0bec5;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																    <div style="font-size:11px;text-align:center;">
																	 		<div class="col s6">
																		 		<span"><b>Course Code</b></span></br>
																		 		${courses[i].idc}

																	 		</div>
																	 		<div class="col s6">
																		 		<span><b>Course Description</b></span></br>
																		 		${courses[i].des}
																		 	</div>
																	</div>
																	<div style="font-size:11px;text-align:center;margin-top:20px;">
																	 		<div class="col s12">
																			 	<div class="col s6">
																			 		<span"><b>Course Units</b></span></br>
																			 		${courses[i].unit}

																		 		</div>
																		 		<div class="col s6">
																			 		<span><b>Pre-requisite</b></span></br>
																			 		${courses[i].prerequisite}
																			 	</div>
																		 	</div>
																		<a style="font-size:10px;" id="${i}" onclick="component.singleCoursePage(${y}, this, ${backOption})" href="#goUp" class="waves-effect waves-light btn"><span>View Course</span></a>
																	</div>
																</div>
															</div>
									 					</li>
												      `;
												    }
												    else {
												    	html+=`
														 <li style="boder:none;"> 
														    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><i style="font-size:16px;" class="fa fa-book" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
															    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																    <div style="font-size:11px;text-align:center;">
																	 		<div class="col s6">
																		 		<span"><b>Course Code</b></span></br>
																		 		${courses[i].idc}

																	 		</div>
																	 		<div class="col s6">
																		 		<span><b>Course Description</b></span></br>
																		 		${courses[i].des}
																		 	</div>
																	</div>
																	<div style="font-size:11px;text-align:center;">
																	 		<div class="col s12" style="margin-top:20px;">
																			 	<div class="col s6">
																			 		<span"><b>Course Units</b></span></br>
																			 		${courses[i].unit}

																		 		</div>
																		 		<div class="col s6">
																			 		<span><b>Pre-requisite</b></span></br>
																			 		${courses[i].prerequisite}
																			 	</div>
																		 	</div>
																		<a style="font-size:10px;" id="${i}" onclick="component.singleCoursePage(${y}, this, ${backOption})" href="#goUp" class="waves-effect waves-light btn"><span>View Course</span></a>
																	</div>
																</div>
															</div>
									 					</li>
												      `;
												    }

										}

									else {
										continue;

									}

						 	}
						      
							 else {
							      	continue;
							      }
							 	} //inner loop close bracket
							 } // loop close bracket
						 
						 component.reRender2(html, '#peekListOfCourses');
						 Materialize.fadeInImage('#peekListOfCourses');
						 Materialize.showStaggeredList('#peekListOfCourses');


						}//Request GET COURSES


					}//Request get USER INFO

				}//Request Open DB

	}

	displayOtherCourses(index, option){
		//Render courses for user's preview
		let backOption = option;
		if (option===undefined){
			backOption=2;
		}
		let progIndex = index;
		let whatYear = $("#viewCourseYear option:selected").text();
		let whatYearNum = whatYear.charAt(0);
		if(whatYearNum==""){
			whatYearNum=1;
			whatYear="1st Year"
		};
		let userProgram ="";
		let userProgDuration ="";
		let userProgCode ="";
		let userProgSystem="";
		let termsPerYear=0;
		let systemWord ="";
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["availablePrograms"], "readonly").objectStore("availablePrograms");
				let requestGET = objectStore.get(1);

					requestGET.onsuccess = function(e){
						let data = event.target.result;
						userProgram = data[index].name;
						userProgDuration = data[index].duration;
						userProgCode = data[index].code;
						userProgSystem = data[index].type;

								// "name":"Computer Science",
								// "code":"CS",
								// "type":"Trimestral",
								// "terms":"3",
								// "duration":"3",
								// "addedBy:":"Default",
								// "date":"20 January, 2018"

							if(userProgSystem == "Trimestral"){
								termsPerYear=3;
								systemWord="Trimester";
							}
							else if (userProgSystem == "Semestral"){
								termsPerYear=2;
								systemWord="Semester";
							}
						document.getElementById('myprogram').innerHTML = userProgram;
						document.getElementById('peekProgYear').innerHTML = whatYear +" Courses";
						let objectStore2 = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGetCOURSES = objectStore2.get(1);


						requestGetCOURSES.onsuccess = function(e){
						let courses = event.target.result;
						let html =``;
							for (let semNum=1;semNum<=termsPerYear;semNum++){
									// if(semNum==1){
									// 	document.getElementById('firstTerm').innerHTML= semNum+"st "+systemWord;
									// }
									if (semNum>1){
										if (semNum==2){
										html+= ` 
										</ul>

										<div class="col s12 midhead">
										         2nd ${systemWord}
										 </div>
										 <br><br>
					  	 					<ul style="border:none;" class="collapsible excessAccordion" data-collapsible="accordion">
										`;
										}

										else if (semNum==3){
										html+= ` 
										</ul>
										<div class="col s12 midhead">
										         3rd Trimester
										 </div>
										 <br><br>
					  	 					<ul style="border:none;" class="collapsible excessAccordion" data-collapsible="accordion">
										`;
										}

									}

						 	for (let i=0;i<courses.length;i++){
						 		
						 		if(courses[i].year==whatYearNum && courses[i].sem==semNum){ 
						 				if(courses[i].program.includes(userProgCode)){
						 							if(courses[i].stat=="INPROGRESS"){
														 html+=`
														 <li style="boder:none;"> 
														    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion-inprogress truncate"><i style="font-size:16px;" class="fa fa-hourglass-half" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
															    <div class="collapsible-body row" style="background-color:#a5d6a7;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																    <div style="font-size:11px;text-align:center;">
																	 		<div class="col s6">
																		 		<span"><b>Course Code</b></span></br>
																		 		${courses[i].idc}

																	 		</div>
																	 		<div class="col s6">
																		 		<span><b>Course Description</b></span></br>
																		 		${courses[i].des}
																		 	</div>
																	</div>
																	<div style="font-size:11px;text-align:center;">
																	 		<div class="col s12" style="margin-top:20px;">
																			 	<div class="col s6">
																			 		<span"><b>Course Units</b></span></br>
																			 		${courses[i].unit}

																		 		</div>
																		 		<div class="col s6">
																			 		<span><b>Pre-requisite</b></span></br>
																			 		${courses[i].prerequisite}
																			 	</div>
																		 	</div>
																		<a style="font-size:10px;" id="${i}" onclick="component.singleCoursePage(${progIndex}, this, ${backOption})" href="#goUp" class="waves-effect waves-light btn"><span>View Course</span></a>
																	</div>
																</div>
															</div>
									 					</li>
												      `;
												    }
												    else if (courses[i].stat=="COMPLETE"){
												    	html+=`
														 <li style="boder:none;"> 
														    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion-completed truncate"><span class="new badge" data-badge-caption="">${courses[i].grade}</span><i style="color:#a5d6a7;" class="fa fa-check" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
															    <div class="collapsible-body row" style="background-color:#b0bec5;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																    <div style="font-size:11px;text-align:center;">
																	 		<div class="col s6">
																		 		<span"><b>Course Code</b></span></br>
																		 		${courses[i].idc}

																	 		</div>
																	 		<div class="col s6">
																		 		<span><b>Course Description</b></span></br>
																		 		${courses[i].des}
																		 	</div>
																	</div>
																	<div style="font-size:11px;text-align:center;margin-top:20px;">
																	 		<div class="col s12">
																			 	<div class="col s6">
																			 		<span"><b>Course Units</b></span></br>
																			 		${courses[i].unit}

																		 		</div>
																		 		<div class="col s6">
																			 		<span><b>Pre-requisite</b></span></br>
																			 		${courses[i].prerequisite}
																			 	</div>
																		 	</div>
																		<a style="font-size:10px;" id="${i}" onclick="component.singleCoursePage(${progIndex}, this, ${backOption})" href="#goUp" class="waves-effect waves-light btn"><span>View Course</span></a>
																	</div>
																</div>
															</div>
									 					</li>
												      `;
												    }
												    else {
												    	html+=`
														 <li style="boder:none;"> 
														    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><i style="font-size:16px;" class="fa fa-book" aria-hidden="true"></i>${courses[i].idc} ${courses[i].des}</div>
															    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																    <div style="font-size:11px;text-align:center;">
																	 		<div class="col s6">
																		 		<span"><b>Course Code</b></span></br>
																		 		${courses[i].idc}

																	 		</div>
																	 		<div class="col s6">
																		 		<span><b>Course Description</b></span></br>
																		 		${courses[i].des}
																		 	</div>
																	</div>
																	<div style="font-size:11px;text-align:center;">
																	 		<div class="col s12" style="margin-top:20px;">
																			 	<div class="col s6">
																			 		<span"><b>Course Units</b></span></br>
																			 		${courses[i].unit}

																		 		</div>
																		 		<div class="col s6">
																			 		<span><b>Pre-requisite</b></span></br>
																			 		${courses[i].prerequisite}
																			 	</div>
																		 	</div>
																		<a style="font-size:10px;" id="${i}" onclick="component.singleCoursePage(${progIndex}, this, ${backOption})" href="#goUp" class="waves-effect waves-light btn"><span>View Course</span></a>
																	</div>
																</div>
															</div>
									 					</li>
												      `;
												    }

										}

									else {
										continue;

									}

						 	}
						      
							 else {
							      	continue;
							      }
							 	} //inner loop close bracket
							 } // loop close bracket
						 
						 component.reRender2(html, '#peekListOfCourses');
						 Materialize.fadeInImage('#peekListOfCourses');
						 Materialize.showStaggeredList('#peekListOfCourses');


						}//Request GET COURSES


					}//Request get USER INFO

				}//Request Open DB

	}

	countCourseYear(){
		//For display course page

		let userProgDuration ="";
		let request = indexedDB.open('opcoursedata', 1);

				request.onsuccess = function(e){
						let db = e.target.result;
					let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
					let requestGET = objectStore.get(1);

						requestGET.onsuccess = function(e){
						let data = event.target.result;
						userProgDuration = data.programDuration;
						console.log(userProgDuration);
						let selectYears="";
							for(let x=1;x<=userProgDuration;x++){
										if(x==1){
											selectYears+= `
												<option value="${x}">${x}st Year</option>
											`;
										}
										else if(x==2){
											selectYears+= `
											<a>
												<option value="${x}">${x}nd Year</option>
											</a>
											`;											
										}
										else if(x==3){
											selectYears+= `
											<a>
												<option value="${x}">${x}rd Year</option>
											</a>
											`;											
										}
										else{
											selectYears+= `
											<a>
												<option value="${x}">${x}th Year</option>
											</a>
											`;	
										}

									}//loop

						component.reRender2(selectYears, '#viewCourseYear');

						}//Request get USER INFO

				}//Request Open DB

	}

	countPreviewCourseYear(index){
		//For display course page
		console.log(index);
		let userProgDuration ="";
		let request = indexedDB.open('opcoursedata', 1);

				request.onsuccess = function(e){
						let db = e.target.result;
					let objectStore = db.transaction(["availablePrograms"], "readonly").objectStore("availablePrograms");
					let requestGET = objectStore.get(1);

						requestGET.onsuccess = function(e){
						let data = event.target.result;
						userProgDuration = data[index].duration;
						console.log(userProgDuration);
						let selectYears="";
							for(let x=1;x<=userProgDuration;x++){
										if(x==1){
											selectYears+= `
												<option value="${x}">${x}st Year</option>
											`;
										}
										else if(x==2){
											selectYears+= `
											<a>
												<option value="${x}">${x}nd Year</option>
											</a>
											`;											
										}
										else if(x==3){
											selectYears+= `
											<a>
												<option value="${x}">${x}rd Year</option>
											</a>
											`;											
										}
										else{
											selectYears+= `
											<a>
												<option value="${x}">${x}th Year</option>
											</a>
											`;	
										}

									}//loop

						component.reRender2(selectYears, '#viewCourseYear');

						}//Request get USER INFO

				}//Request Open DB

	}

	termPerYear(programTerm){
		let y=programTerm;
		let one = "1st";
		let two = "2nd";
		let three = "3rd";
		let four = "4th";
		let five ="5th";
		let html=``;
		for(let x=1;x<=y;x++){
			html+=`
				<li><a id=${x}style="color:#fff;" onclick="component.peekFirstYear(this)">Year ${x}</a></li>
			`;
			component.reRender2(html, '#dropdown1');
		}

	}

	listHomeSched(){
		let html=``;
		let date= new Date();
		let day=date.getDay();
		let hit = 0;
		let courseID ="";
		let courses = [];

			//IndexedDB section
			let request = indexedDB.open('opcoursedata', 1);

				request.onsuccess = function(e){
					let db = e.target.result;

					let	objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGETCOURSES = objectStore.get(1);

						requestGETCOURSES.onsuccess = function(e){
						let data = event.target.result;
						courses = data;

							let objectStore2 = db.transaction(["courseReminders"], "readonly").objectStore("courseReminders");
							let requestGETReminders = objectStore2.get(1);
								requestGETReminders.onsuccess = function(e){
									let reminders = event.target.result;
										for(let x=0;x<courses.length;x++){
											let reminderWord= "";
											let bell= ``;
											if(courses[x].stat=="INPROGRESS"){	
													let countReminder = 0;
													let reminderTable = ``;
													let reminderContainer = "courseReminderContainer"+x;
													for(let y=0;y<reminders.length;y++){

														if(reminders[y].courseIDC == courses[x].idc){
														countReminder++;
														reminderTable +=`
															<div class="row" style="margin:0;">
																	<div class="col s5" style="padding-top:10px;padding-bottom:10px;">${reminders[y].reminderType}</div>
																	<div class="col s6 left-align" style="padding-top:10px;padding-bottom:10px;">
																		<span style="font-size:10px;font-weight:400;color:#000;;">${reminders[y].reminderDate} at ${reminders[y].reminderTime}</span>																					
																	</div>																	
															</div>
															<hr style="margin-left:12%;margin-right:12%;">
														`;
														}
														// else if (reminders[y].courseIDC !== courses[x].idc){
														// 	continue;
														// }

													}


													if(countReminder==0){
														reminderTable=`
																<div class="row" style="margin:0;">
																	<div class="col s12" style="padding-top:10px;padding-bottom:10px;">No reminders added for this course</div>
																</div>
																<hr style="margin-left:12%;margin-right:12%;">
															`;
														countReminder="no";
														reminderWord = "reminder";
														bell =` `;
													}
													else if(countReminder==1){
														reminderWord="reminder";
														bell = `<i style="font-size:10px;color:red;" class="fa fa-bell" aria-hidden="true"></i>`;
													}
													else{
														bell = `<i style="font-size:10px;color:red;" class="fa fa-bell" aria-hidden="true"></i>`;
														reminderWord ="reminders";
													}

													if(day==1){
															if(courses[x].schedule.M.includes("AM") || courses[x].schedule.M.includes("PM")){
																	hit++;

													        		html +=`
																         <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.M}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																					<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					<div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;padding-top:10px;">
																					<hr style="margin-left:12%;margin-right:12%;">
																						${reminderTable}

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
																        `;
																

													        	}
													        	else{
													        		continue;
													        	}
											        	
													}
													if(day==2){
																if(courses[x].schedule.T.includes("AM") || courses[x].schedule.T.includes("PM")){
																	hit++;
													        		html +=`
																         <li>
																			    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.T}</span><span id="notifyIndicator" style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																				    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																					    <div style="font-size:11px;text-align:center;">
																						 		<div class="col s6">
																							 		<span"><b>Course Units</b></span></br>
																							 		${courses[x].unit}

																						 		</div>
																						 		<div class="col s6">
																							 		<span><b>Pre-requisite</b></span></br>
																							 		${courses[x].prerequisite}
																							 	</div>
																						</div>
																							<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																						 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;padding-top:10px;">
																							 <hr style="margin-left:12%;margin-right:12%;">
																							 	${reminderTable}
																						</div>
																
																						<br>
																						<br>
																						<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																					</div>
																				</div>
																			 </li>

																        `;
																
													        	}

													        	else{
													        		continue;
													        	}
											        	
													}
													if(day==3){
															if(courses[x].schedule.W.includes("AM") || courses[x].schedule.W.includes("PM")){
																hit++;
												        		html +=`
															         <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.W}</span><span id="notifyIndicator" style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;padding-top:10px;">
																					 <hr style="margin-left:12%;margin-right:12%;">
																						 	${reminderTable}
																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>

															        `;
															
															     
												        	}
												        	else{
												        		continue;
												        	}
											        	
													}
													if(day==4){
																if(courses[x].schedule.TH.includes("AM") || courses[x].schedule.TH.includes("PM")){
																hit++;
													        	html +=`
																         <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.TH}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;padding-top:10px;">
																					  <hr style="margin-left:12%;margin-right:12%;">
																					 	${reminderTable}

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
																        `;
																
																        
													        	}

													        	else{
													        		continue;
													        	}
												
													}
													if(day==5){
														if(courses[x].schedule.F.includes("AM") || courses[x].schedule.F.includes("PM")){
														hit++;
											        	html +=`
														         <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.F}</span><span id="notifyIndicator" style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;padding-top:10px;">
																					 <hr style="margin-left:12%;margin-right:12%;">
																						 	${reminderTable}

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
														        `;
														 
											        	}

											        	else{
											        		continue;
											        	}
											        	
													}
													if(day==6){
														if(courses[x].schedule.S.includes("AM") || courses[x].schedule.S.includes("PM")){
														hit++;
											        	html +=`
														        <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.S}</span><span id="notifyIndicator" style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;padding-top:10px;">
																						 <hr style="margin-left:12%;margin-right:12%;">
																						 ${reminderTable}

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
														        `;
														        
											        	}

											        	else{
											        		continue;
											        	}
													}

												 	if(day==0){
											  	      	if (courses[x].schedule.SU.includes("AM") || courses[x].schedule.SU.includes("PM")){
														hit++;
											        	html +=`
														        <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.SU}</span><span id="notifyIndicator" style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;padding-top:10px;">
																						 	${reminderTable}
																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
														        `;

											        	}

											        	else{
											        		continue;
											        	}


											        	

													}

												component.reRender2(html, '#homeSchedule');
												Materialize.showStaggeredList('#homeSchedule');
												
											}// if close brace
										}//loop close brace
									if (hit==0) {
										 			let html= `
											 	 			<div class="col s12" style="min-height:100%;">
											 						<center><div style="color:#757575;font-size:20px;margin-top:25px;">No Schedule for Today</div><center>
											 						<center><img style="width:110px;height:110px;" src="img/checkSchedule.png"><center>
											 	 			</div>
											 	 		`;
											 	 		component.reRender2(html, '#homeSchedule');
											}



								}//requestGETReminders.onsuccess closing brace


					}//requestGETCOURSES.onsuccess closing brace
					requestGETCOURSES.onerror = function(e){

					}

			}//requestOpen.onsuccess closing brace

	} 

	listHomeTomorrow(){
		console.log("listHomeTomorrow");
		let html=``;
		let date= new Date();
		let day=date.getDay();
		let hit = 0;
		let courseID ="";

		let courses = [];

			//IndexedDB section
			let request = indexedDB.open('opcoursedata', 1);

				request.onsuccess = function(e){
					let db = e.target.result;

					let	objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGETCOURSES = objectStore.get(1);

						requestGETCOURSES.onsuccess = function(e){
						let data = event.target.result;
						courses = data;

							let objectStore2 = db.transaction(["courseReminders"], "readonly").objectStore("courseReminders");
							let requestGETReminders = objectStore2.get(1);
								requestGETReminders.onsuccess = function(e){
									let reminders = event.target.result;
										for(let x=0;x<courses.length;x++){
												let reminderWord= "";
												let bell= ``;
												if(courses[x].stat=="INPROGRESS"){	
														let countReminder = 0;
														let reminderTable=``;
														for(let y=0;y<reminders.length;y++){
															if(reminders[y].courseIDC == courses[x].idc){
															countReminder++;
															reminderTable +=`
																<div class="row" style="margin:0;">
																		<div class="col s5" style="padding-top:10px;padding-bottom:10px;">${reminders[y].reminderType}</div>
																		<div class="col s6 left-align" style="padding-top:10px;padding-bottom:10px;">
																			<span style="font-size:10px;font-weight:400;color:#000;;">${reminders[y].reminderDate} at ${reminders[y].reminderTime}</span>																					
																		</div>																	
																</div>
																<hr style="margin-left:12%;margin-right:12%;">
															`;
															}
														}

														if(countReminder==0){
															reminderTable=`
																<div class="row" style="margin:0;">
																	<div class="col s12" style="padding-top:10px;padding-bottom:10px;">No reminders added for this course</div>
																</div>
																<hr style="margin-left:12%;margin-right:12%;">
															`;
															countReminder="no";
															reminderWord = "reminder";
															bell =` `;
														}
														else if(countReminder==1){
															reminderWord="reminder";
															bell = `<i style="font-size:10px;color:red;" class="fa fa-bell" aria-hidden="true"></i>`;
														}
														else{
															bell = `<i style="font-size:10px;color:red;" class="fa fa-bell" aria-hidden="true"></i>`;
															reminderWord ="reminders";
														}	

													if(day==1){
															if(courses[x].schedule.T.includes("AM") || courses[x].schedule.T.includes("PM")){
																	hit++;
																	console.log("For tuesday!");
													        		html +=`
																         <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.T}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																					<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					<div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;">
																					<hr style="margin-left:12%;margin-right:12%;">
																						${reminderTable}		

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
																        `;
																

													        	}
													        	else{
													        		continue;
													        	}
											        	
													}
													if(day==2){
																if(courses[x].schedule.W.includes("AM") || courses[x].schedule.W.includes("PM")){
																	hit++;
																	console.log("For Wednesday!");
													        		html +=`
																        <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.W}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																					<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					<div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;">
																					<hr style="margin-left:12%;margin-right:12%;">
																						 ${reminderTable}	

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
																        `;
																 
													        	}

													        	else{
													        		continue;
													        	}
											        	
													}
													if(day==3){
															if(courses[x].schedule.TH.includes("AM") || courses[x].schedule.TH.includes("PM")){
																hit++;
																console.log("For Thursday!");
												        		html +=`
															         <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.TH}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;">
																					 <hr style="margin-left:12%;margin-right:12%;">
																						 	${reminderTable}
																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
															        `;
															 
												        	}
												        	else{
												        		continue;
												        	}
											        	
													}
													if(day==4){
																if(courses[x].schedule.F.includes("AM") || courses[x].schedule.F.includes("PM")){
																hit++;
																console.log("For Friday!");
													        	html +=`
																         <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.F}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;">
																					 <hr style="margin-left:12%;margin-right:12%;">
																					 		${reminderTable}

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
																        `;
																     

													        	}

													        	else{
													        		continue;
													        	}
												
													}
													if(day==5){
														if(courses[x].schedule.S.includes("AM") || courses[x].schedule.S.includes("PM")){
														hit++;
														console.log("For Saturday!");
											        	html +=`
														         <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.S}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;">
																					 <hr style="margin-left:12%;margin-right:12%;">
																							${reminderTable}											 		

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
														        `;
														   
											        	}

											        	else{
											        		continue;
											        	}
											        	
													}
													if(day==6){
														if(courses[x].schedule.SU.includes("AM") || courses[x].schedule.SU.includes("PM")){
														hit++;
														console.log("For Sunday!");
											        	html +=`
														        <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.SU}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;margin-bottom:10px;">
																					 <hr style="margin-left:12%;margin-right:12%;">
																						${reminderTable}												 		

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
														        `;
														     
											        	}

											        	else{
											        		continue;
											        	}
													}

												 	if(day==0){
											  	      	if (courses[x].schedule.M.includes("AM") || courses[x].schedule.M.includes("PM")){
														hit++;
														console.log("For Monday!");
											        	html +=`
														        <li>
																		    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span style="margin-left:0;" class="new badge" data-badge-caption="">${courses[x].schedule.M}</span><span style="margin:0;padding:0;margin-right:-13px;" class="badge data-badge-caption="">${bell}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${courses[x].idc} ${courses[x].des}</div>
																			    <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
																				    <div style="font-size:11px;text-align:center;">
																					 		<div class="col s6">
																						 		<span"><b>Course Units</b></span></br>
																						 		${courses[x].unit}

																					 		</div>
																					 		<div class="col s6">
																						 		<span><b>Pre-requisite</b></span></br>
																						 		${courses[x].prerequisite}
																						 	</div>
																					</div>
																						<center><div style="margin-top:8px;margin-bottom:8px;"><b>Reminders</b></span></br><div>
																					 <div id="courseReminderContainer" class="col s12" style="font-size:11px;">
																					 <hr style="margin-left:12%;margin-right:12%;">
																						 	${reminderTable}	

																					</div>
															
																					<br>
																					<br>
																					<center><a style="font-size:10px;" id="" onclick="component.myNotification();" class="waves-effect waves-light btn btn-small">View Reminders</a></center>

																				</div>
																			</div>
																		 </li>
														        `;
														       

											        	}

											        	else{
											        		continue;
											        	}

													}

												component.reRender2(html, '#homeScheduleTom');
												Materialize.fadeInImage('#homeScheduleTom');
												Materialize.showStaggeredList('#homeScheduleTom');
												
											}
										}
									if (hit==0) {
										 			let html= `
											 	 			<div class="col s12" style="min-height:100%;">
											 						<center><div style="color:#757575;font-size:20px;margin-top:25px;">No Schedule for Tomorrow</div><center>
											 						<center><img style="width:110px;height:110px;" src="img/checkSchedule.png"><center>
											 	 			</div>
											 	 		`;
											 	 		component.reRender2(html, '#homeScheduleTom');
											}



								}//requestGETReminders.onsuccess closing brace


					}//requestGETCOURSES.onsuccess closing brace
					requestGETCOURSES.onerror = function(e){

					}

			}//requestOpen.onsuccess closing brace

	}

	listHomeWeekly(){
		let hit=0;
		let html="";
		let request = indexedDB.open('opcoursedata', 1);
		let db="";

		request.onsuccess = function(e){
			db = e.target.result;

				let transaction = db.transaction(['courses2'], "readonly");
				let objectStore = transaction.objectStore('courses2');
				let requestGet = objectStore.get(1);

					requestGet.onsuccess = function(e){
						let data = event.target.result;

						for(let x=0;x<data.length;x++){
							if(data[x].stat=="INPROGRESS"){
								hit++;
								let days = "";
								let day1="None";
								let day2="None";
								let day3="None";
								let day4="None";
								let day5="None";
								let day6="None";
								let day0="None";

									if(data[x].schedule.M.includes("AM") || data[x].schedule.M.includes("PM")){
							        	days+="M";
							        	day1=data[x].schedule.M;
							        }

							        if(data[x].schedule.T.includes("AM") || data[x].schedule.T.includes("PM")){
							        	days+="T";
							        	day2=data[x].schedule.T;
							        }
							        if(data[x].schedule.W.includes("AM") || data[x].schedule.W.includes("PM")){
							        	days+="W";
							        	day3=data[x].schedule.W;
							        }
							        if(data[x].schedule.TH.includes("AM") || data[x].schedule.TH.includes("PM")){
							        	days+="TH";
							        	day4=data[x].schedule.TH;
							        }
							        if(data[x].schedule.F.includes("AM") || data[x].schedule.F.includes("PM")){
							        	days+="F";
							        	day5=data[x].schedule.F;
							        }
							        if(data[x].schedule.S.includes("AM") || data[x].schedule.S.includes("PM")){
							        	days+="S";
							        	day6=data[x].schedule.S;
							        }
							        if(data[x].schedule.SU.includes("AM") || data[x].schedule.SU.includes("PM")){
							        	days+="SU";
							        	day0=data[x].schedule.SU;
							        }

							        if(days==""){
							        	days="N/A";
							        	console.log("Im Here!");
							        }
							   		html +=`
									         <li>
											    <div style="border-top:0;border-left:0;border-right:0;padding-top:3px;" class="collapsible-header home-accordion truncate"><span class="new badge" data-badge-caption="">${days}</span><i class="fa fa-clock-o" aria-hidden="true"></i>${data[x].idc} ${data[x].des}</div>
												 	<div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;padding-top:11px;padding-bottom:10px;" >
											`;


							       			html+=`
															 <div style="font-size:11px;text-align:center;">
																	<div class="col s12">
																		<span"><b>Course Schedule</b></span></br>
																		`;
																		if(day1!=="None"){
																			html+=`
																				<div class="row" style="margin:0;">
																						<div class="col s5" style="padding-top:10px;padding-bottom:10px;">Mondays</div>
																						<div class="col s6 right-align" style="padding-top:10px;padding-bottom:10px;">
																							<span style="font-size:10px;font-weight:400;color:#000;;">${day1}</span>																					
																						</div>																	
																				</div>
																				`;
																		}
																		if(day2!=="None"){
																			html+=`
																				<div class="row" style="margin:0;">
																						<div class="col s5" style="padding-top:10px;padding-bottom:10px;">Tuesdays</div>
																						<div class="col s6 right-align" style="padding-top:10px;padding-bottom:10px;">
																							<span style="font-size:10px;font-weight:400;color:#000;;">${day2}</span>																					
																						</div>																	
																				</div>
																				`;
																		}
																		if(day3!=="None"){
																			html+=`
																				<div class="row" style="margin:0;">
																						<div class="col s5" style="padding-top:10px;padding-bottom:10px;">Wednesdays</div>
																						<div class="col s6 right-align" style="padding-top:10px;padding-bottom:10px;">
																							<span style="font-size:10px;font-weight:400;color:#000;;">${day3}</span>																					
																						</div>																	
																				</div>
																				`;
																		}
																		if(day4!=="None"){
																			html+=`
																				<div class="row" style="margin:0;">
																						<div class="col s5" style="padding-top:10px;padding-bottom:10px;">Thursdays</div>
																						<div class="col s6 right-align" style="padding-top:10px;padding-bottom:10px;">
																							<span style="font-size:10px;font-weight:400;color:#000;;">${day4}</span>																					
																						</div>																	
																				</div>
																				`;
																		}
																		if(day5!=="None"){
																			html+=`
																				<div class="row" style="margin:0;">
																						<div class="col s5" style="padding-top:10px;padding-bottom:10px;">Fridays</div>
																						<div class="col s6 right-align" style="padding-top:10px;padding-bottom:10px;">
																							<span style="font-size:10px;font-weight:400;color:#000;;">${day5}</span>																					
																						</div>																	
																				</div>
																				`;
																		}
																		if(day6!=="None"){
																			html+=`
																				<div class="row" style="margin:0;">
																						<div class="col s5" style="padding-top:10px;padding-bottom:10px;">Saturdays</div>
																						<div class="col s6 right-align" style="padding-top:10px;padding-bottom:10px;">
																							<span style="font-size:10px;font-weight:400;color:#000;;">${day6}</span>																					
																						</div>																	
																				</div>
																				`;
																		}
																		if(day0!=="None"){
																			html+=`
																				<div class="row" style="margin:0;">
																						<div class="col s5" style="padding-top:10px;padding-bottom:10px;">Sundays</div>
																						<div class="col s6 right-align" style="padding-top:10px;padding-bottom:10px;">
																							<span style="font-size:10px;font-weight:400;color:#000;;">${day0}</span>																					
																						</div>																	
																				</div>
																				`;
																		}
																		if(days=="N/A"){
																        	html+=`
																				<div class="row" style="margin:0;">
																				
																						<div class="col s12 center-align" style="padding-top:10px;padding-bottom:10px;">
																							<span style="font-size:10px;font-weight:400;color:#000;;">No Schedule Added</span>																					
																						</div>																	
																				</div>
																				`;
																        }


											html+=`
																	</div>
															</div>

													</div>
												</div>
											 </li>
									`;

						    }


						}
						 if (hit===0){
						    		let html= `
										<div class="col s12" style="height:100%;">		
											<center><h5 style="color:#757575;">No Schedule Added</h5><center>
											<center><img style="width:150px;height:150px;" src="img/checkSchedule.png"><center>
										</div>
										`;
						    }


							console.log(hit);
							component.reRender2(html, '#homeScheduleWeekly');
							Materialize.fadeInImage('#homeScheduleWeekly');
							Materialize.showStaggeredList('#homeScheduleWeekly');

					}

					requestGet.onerror = function(e){

					}

		}
		request.onerror = function(e){

		}

	} 

	listComplete(){

		// let html=` `;

		// for(let i=0;i<this.completedCourses.length;i++){

		// html +=`
		// 	<li>
	 	//         <div style="border:none;" class="collapsible-header home-accordion truncate"><i class="fa fa-book lg" aria-hidden="true"></i>${this.completedCourses[i].idc} ${this.completedCourses[i].des}</div>
	 	//            <div class="collapsible-body" style="background-color:#ffcdd2;width:100%;">

		//            	<div class="row center-align">
		// 			    <input class="col s12" style="background-color:#fff;width:50%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;" maxlength="15" type="text" placeholder="Enter your grade" required/>
		// 			</div>
		// 			<div class="row">
		// 			 	<div  class="col s6 select-button"><center><a id="${this.courses[i].idc}-btnAddList${i}" class="waves-effect waves-light btn" onclick="component.deactivateAddButton(${i}),component.checkboxValue(this)">Add</a></center>
		// 	              </div>
		// 	            <div  class="col s6 select-button"><center><a id="btnComplete${i}" class="waves-effect waves-light btn" onclick="component.deactivateDoneButton(${i})">Done</a></center>
		// 	              </div>
		// 			 </div>

	 	//           	</div>
		//          </div>
		//        </li>
		//        `;
		// }

		// this.reRender2(html, '#completedCourses');
		// Materialize.showStaggeredList('#completedCourses')
		//console.log("Listing Completed");
	} 

	computeSummary(){
		let userProgPreview ="";
		let userProgram=""
		let userPcode ="";
		let courses = [];

		//IndexedDB section
		let request = indexedDB.open('opcoursedata', 1);

			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
				let requestGET = objectStore.get(1);

					requestGET.onsuccess = function(e){
						let data = event.target.result;
						userPcode = data.pcode;	


						objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGETCOURSES = objectStore.get(1);

						requestGETCOURSES.onsuccess = function(e){
								let data = event.target.result;
								courses = data;
									let usercourses=0;
									let courseCompleted=0;
									let courseInprogress=0;
									let courseNottaken=0;
									let progressTotal=0;
									for (let x=0;x<courses.length;x++){
										if(courses[x].program.includes(userPcode)){
										usercourses++;
										}
										if(courses[x].program.includes(userPcode) && courses[x].stat == "COMPLETE"){
										courseCompleted++;
										}
										if(courses[x].program.includes(userPcode) && courses[x].stat == "INPROGRESS"){
										courseInprogress++;
										}
										if(courses[x].program.includes(userPcode) && courses[x].stat == "NOT TAKEN"){
										courseNottaken++;
										}
									}

									let total = `
										<div style="font-size:14px;">${usercourses}</div>
									`;
									component.reRender2(total, '#totalCourses');

									let completed = `
										<div style="font-size:14px;">${courseCompleted}</div>
									`;
									component.reRender2(completed, '#completedCourses');

									let notTaken = `
										<div style="font-size:14px;">${courseNottaken}</div>
									`;
									component.reRender2(notTaken, '#courseNottaken');

									let Inprogress = `
										<div style="font-size:14px;">${courseInprogress}</div>
									`;
									component.reRender2(Inprogress, '#inprogressCourses');

									// let calculateTotal = `
									// 	<span>${Math.round((courseCompleted / usercourses) * 100)}%</span>
									// `;
									// component.reRender2(calculateTotal, '#progressTotal');
									progressTotal = Math.round((courseCompleted / usercourses) * 100);
									if(isNaN(progressTotal)){
										document.getElementById('progressContainer').innerHTML = "No Courses Added";
									}
									else{
										// progressTotal+="% Complete";
										component.progressBar(progressTotal);
										// document.getElementById('progressPercent').innerHTML = progressTotal;
									}
		
						}//requestGETCOURSES.onsuccess end brace
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}


					}
				requestGET.onerror = function(e){

				}
				requestGET.oncomplete = function(e){

				}


			}//requestOpen.onsuccess end brace

	}
	// computeTimeRemaining(){
	// 	let userProgPreview ="";
	// 	let userProgram=""
	// 	let userPcode ="";
	// 	let courses = [];
	// 	let myCourses = [];
	// 	//IndexedDB section
	// 	let request = indexedDB.open('opcoursedata', 1);
	// 		request.onsuccess = function(e){
	// 			let db = e.target.result;
	// 			let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
	// 			let requestGET = objectStore.get(1);
	// 				requestGET.onsuccess = function(e){
	// 					let data = event.target.result;
	// 					userPcode = data.pcode;	
	// 					let year = data.programDuration;
	// 					let terms ="";
	// 					let monthsPerTerm=""
	// 					if(data.programSystem=="Trimestral"){
	// 						terms = 3;
	// 						monthsPerTerm=4;
	// 					}
	// 					else if (data.programSystem=="Semestral"){
	// 						terms = 2;
	// 						monthsPerTerm=5;
	// 					}
	// 					objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
	// 					let requestGETCOURSES = objectStore.get(1);
	// 					requestGETCOURSES.onsuccess = function(e){
	// 							let data = event.target.result;
	// 							courses = data;
	// 							for(let transfer=0;transfer<courses.length;transfer++){
	// 								if(courses[transfer].program.includes(userPcode)){
	// 									myCourses.push(courses[transfer]);
	// 								}
	// 							}
	// 								let result="";
	// 								let accumulatedProgress = 0;
	// 								let totalduration = year * 12;
	// 								console.log(terms);
	// 									for(let a=1;a<=year;a++){
	// 										for(let b=1;b<=terms;b++){
	// 											let completed=0;
	// 											let notcompleted=0;
	// 											let totalTermCourse=0;
	// 											for (let x=0;x<myCourses.length;x++){
	// 												if(myCourses[x].program.includes(userPcode)){
	// 														if(myCourses[x].year == a && myCourses[x].sem ==b){
	// 															if(myCourses[x].stat=="COMPLETE"){
	// 																completed++;
	// 															}
	// 															else{
	// 																notcompleted++;
	// 															}
	// 															totalTermCourse=completed+notcompleted;
	// 														}
	// 												}
	// 											}
	// 											if(totalTermCourse==completed){
	// 												accumulatedProgress = accumulatedProgress+monthsPerTerm;
	// 											}
	// 										}
											
	// 									}
	// 								result = totalduration - accumulatedProgress;

	// 								let resultYear = Math.floor(result/12);
	// 								let resultMonth = result%12;

	// 								let wordYear ="";
	// 								let wordMonth="";
	// 									if(resultYear==1){
	// 										wordYear="Year";
	// 									}
	// 									else if(resultYear==0){
	// 										wordYear="";
	// 									}
	// 									else{
	// 										wordYear="Years";
	// 									}
	// 									if(resultMonth==1){
	// 										wordMonth="Month";
	// 									}
	// 									else if(resultMonth==0){
	// 										wordMonth=" ";
	// 									}
	// 									else{
	// 										wordMonth="Months";
	// 									}
	// 									if (resultMonth==0){
	// 										resultMonth="";
	// 									}
	// 									if (resultYear==0){
	// 										resultYear="";
	// 									}

	// 							console.log(Number.isInteger(resultYear));
	// 							console.log(Number.isInteger(resultMonth));
	// 							console.log(isNaN(resultMonth));
	// 							if(isNaN(resultYear) || isNaN(resultMonth)){
	// 								document.getElementById('timeRemaining').innerHTML = "Unable to estimate time";
	// 							}
	// 							else if(Number.isInteger(resultYear) || Number.isInteger(resultMonth)){
	// 								document.getElementById('timeRemaining').innerHTML = resultYear+" "+ wordYear + " "+resultMonth +" "+wordMonth+" remaining";
	// 							}
	// 							else {
	// 								document.getElementById('timeRemaining').innerHTML = "Unable to estimate time";
	// 							}
	// 					}//requestGETCOURSES.onsuccess end brace
	// 				requestGETCOURSES.onerror = function(e){

	// 				}
	// 				requestGETCOURSES.oncomplete = function(e){

	// 				}


	// 				}
	// 			requestGET.onerror = function(e){

	// 			}
	// 			requestGET.oncomplete = function(e){

	// 			}


	// 		}//requestOpen.onsuccess end brace

	// }

	transCourseReminder(){
		let courseIDC = $("input[type='radio'][name='courseGroup']:checked").val();
		document.getElementById("catchCourseIDC").innerHTML = courseIDC;
	}

	addReminder(){

		let courseIDC = document.getElementById("catchCourseIDC").innerHTML;
		let reminderType = $("#reminderType option:selected").text();
		let reminderDate = document.getElementById("reminderDate").value;
		let reminderTime = document.getElementById("reminderTime").value;
		let shortDesc = $('#shortDesc').val();
		let courseReminder = {
				"reminderID":"",
				"courseIDC":courseIDC,
				"reminderType":reminderType,
				"reminderDate":reminderDate,
				"reminderTime":reminderTime,
				"reminderDesc":shortDesc,
		};

		let request = indexedDB.open('opcoursedata', 1);
		let db="";

		request.onsuccess = function(e){
			db = e.target.result;

				let transaction = db.transaction(['courseReminders'], "readwrite");
				let objectStore = transaction.objectStore('courseReminders');
				let requestGet = objectStore.get(1);

					requestGet.onsuccess = function(e){
						let data = event.target.result;
						if(data.length>0){
							let max = data.length-1;
							courseReminder.reminderID = data[max].reminderID+1;
						}
						else {
							courseReminder.reminderID=1;
						}

						data.push(courseReminder);
						let requestUpdate = objectStore.put(data, 1);
						requestUpdate.onsuccess = function(e){

							let objectStore2 = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
							let requestUserInfo = objectStore2.get(1);

							requestUserInfo.onsuccess = function(e){
								let userInfo = event.target.result;
									console.log(userInfo.localNotif);
									if(userInfo.localNotif===true){
										component.setLocalReminder3(courseReminder.reminderID, reminderDate, reminderTime, reminderType);
										console.log("reminder set!");
									}

									component.myNotification();
							}

						}
						requestUpdate.onerror = function(e){
							console.log("Error in adding reminder!");
						}

					}

					requestGet.onerror = function(e){

					}
		}
		request.onerror = function(e){

		}

	}
	deleteReminder(index){
			let request = indexedDB.open('opcoursedata', 1);
			let db="";

			request.onsuccess = function(e){
				db = e.target.result;

					let transaction = db.transaction(['courseReminders'], "readwrite");
					let objectStore = transaction.objectStore('courseReminders');
					let requestGet = objectStore.get(1);
					
						requestGet.onsuccess = function(e){
							let data = event.target.result;
								data.splice(index, 1);
							let requestUpdate = objectStore.put(data, 1);
							requestUpdate.onsuccess = function(e){
								component.myNotification();
								console.log("Reminder Succesfully Deleted.")
							}
							requestUpdate.onerror = function(e){
								console.log("Error in adding reminder!");
							}

						}

						requestGet.onerror = function(e){

						}
			}
			request.onerror = function(e){

			}

	}

	updateReminder(){



	}

	populateReminder(){
		let requestOpen = indexedDB.open('opcoursedata', 1);
			requestOpen.onsuccess = function(e){
				// console.log('Gate Open!');
				let db = e.target.result;

				var objectStore = db.transaction(['courseReminders'], "readonly").objectStore('courseReminders');
				let requestGet = objectStore.get(1);
				requestGet.onsuccess = function(e){
					let data = event.target.result;
					let html=``;
					for(let x=0;x<data.length;x++){
						if(data[x].reminderType=="Quiz"){
							html+=`
							<a id="${x}" onclick="component.reminderEachPage(this)" class="secondary-content" style="width:100%;color:#000;border: 1px solid #f5f5f5;margin-bottom:8px;border:1px solid #e0e0e0:">
								<li class="collection-item avatar">
									 <img src="img/quiz.png" alt="" class="circle" style="margin-top:10px;">
										<span class="title">${data[x].courseIDC}</span>
											<p>${data[x].reminderType}<br>
												${data[x].reminderDate}
											</p>
								</li>
							</a>
							`;

						}
						else if(data[x].reminderType=="Event"){
							html+=`
							<a id="${x}" onclick="component.reminderEachPage(this)" class="secondary-content" style="width:100%;color:#000;border: 1px solid #f5f5f5;margin-bottom:8px;border:1px solid #e0e0e0:">
								<li class="collection-item avatar">
									 <img src="img/event.png" alt="" class="circle" style="margin-top:10px;">
										<span class="title">${data[x].courseIDC}</span>
											<p>${data[x].reminderType}<br>
												${data[x].reminderDate}
											</p>
									
								</li>
							</a>
							`;
						}
						else if(data[x].reminderType=="Exam"){
							html+=`
							<a id="${x}" onclick="component.reminderEachPage(this)" class="secondary-content" style="width:100%;color:#000;border: 1px solid #f5f5f5;margin-bottom:8px;border:1px solid #e0e0e0:">
								<li class="collection-item avatar">
									 <img src="img/exam.png" alt="" class="circle" style="margin-top:10px;">
										<span class="title">${data[x].courseIDC}</span>
											<p>${data[x].reminderType}<br>
												${data[x].reminderDate}
											</p>
									
								</li>
							</a>
							`;
						}
						else if(data[x].reminderType=="Activity"){
							html+=`
							<a id="${x}" onclick="component.reminderEachPage(this)" class="secondary-content" style="width:100%;color:#000;border: 1px solid #f5f5f5;margin-bottom:8px;border:1px solid #e0e0e0:">
								<li class="collection-item avatar">
									 <img src="img/activity.png" alt="" class="circle" style="margin-top:10px;">
										<span class="title">${data[x].courseIDC}</span>
											<p>${data[x].reminderType}<br>
												${data[x].reminderDate}
											</p>
								</li>
							</a>
							`;
						}
						else if(data[x].reminderType=="Meeting"){
							html+=`
							<a id="${x}" onclick="component.reminderEachPage(this)" class="secondary-content" style="width:100%;color:#000;border: 1px solid #f5f5f5;margin-bottom:8px;border:1px solid #e0e0e0:">
								<li class="collection-item avatar">
									 <img src="img/meeting.png" alt="" class="circle" style="margin-top:10px;">
										<span class="title">${data[x].courseIDC}</span>
											<p>${data[x].reminderType}<br>
												${data[x].reminderDate}
											</p>
									
								</li>
							</a>
							`;
						}

						component.reRender2(html, '#remindersList');
					}

				}
				requestGet.onerror = function(e){
					console('Cannot read the Setup data!');
				}


			}
			requestOpen.onerror = function(e){


			}

	}


	catctResult(result){
		return result;
		console.log(result);
	}

	populateProgram(){
			let requestOpen = indexedDB.open('opcoursedata', 1);
			requestOpen.onsuccess = function(e){
				// console.log('Gate Open!');
				let db = e.target.result;

				var objectStore = db.transaction(['availablePrograms'], "readonly").objectStore('availablePrograms');
				let requestGet = objectStore.get(1);
				requestGet.onsuccess = function(e){
					let data = event.target.result;
					let html=``;
					for(let x=0;x<data.length;x++){
						html+=`
								<a id="${x}" onclick="component.singleProgramPage(this)" class="collection-item teal lighten-2" style="display:block;width:100%;height:100px;margin-bottom:10px;border:1px solid #eee;color:#000;" class="secondary-content">
									<div>
										${data[x].name}
									</div>
								</a>

						`;
						component.reRender2(html, '#manageProgramList');
					}

				}
				requestGet.onerror = function(e){
					console('Cannot read the Setup data!');
				}

			}
			requestOpen.onerror = function(e){


			}


	}

	addProgram(){
		let date = new Date();
		let day = date.getDay();
		let monthNum = date.getMonth();
		let month="";
		let daynum = date.getDate();
		let year = date.getFullYear();

		if (monthNum ==0){
			month = "January";
		}
		else if (monthNum ==1){
			month = "February";
		}
		else if (monthNum ==2){
			month = "March";
		}
		else if (monthNum ==3){
			month = "April";
		}
		else if (monthNum ==4){
			month = "May";
		}
		else if (monthNum ==5){
			month = "June";
		}
		else if (monthNum ==6){
			month = "July";
		}
		else if (monthNum ==7){
			month = "August";
		}
		else if (monthNum ==8){
			month = "September";
		}
		else if (monthNum ==9){
			month = "October";
		}
		else if (monthNum ==10){
			month = "November";
		}
		else if (monthNum ==11){
			month = "December";
		}

		let progName = document.getElementById("programName").value;
		let code = document.getElementById("programCode").value;
		let duration = $("#reminderType option:selected").text();		
		let system = $("input[type='radio'][name='teachingSystem']:checked").val();
		console.log(system);

		if(duration == 1){
			duration = duration;
		}
		else{
			duration = duration;
		}

		let term="";
			if(system=="Trimestral"){
				term=3;
			}
			else if (system=="Semestral"){
				term=2;
			}
		let addedBy = "User";
		let programAdded = daynum+" "+month+", "+year;

		let newProgram = {
				"name":progName,
				"code":code,
				"type":system,
				"terms":term,
				"duration":duration,
				"date":programAdded,
				"addedBy":addedBy
		};

		let request = indexedDB.open('opcoursedata', 1);
		let db="";

		request.onsuccess = function(e){
			db = e.target.result;

				let transaction = db.transaction(['availablePrograms'], "readwrite");
				let objectStore = transaction.objectStore('availablePrograms');
				let requestGet = objectStore.get(1);

					requestGet.onsuccess = function(e){
						let data = event.target.result;
							data.push(newProgram);
						let requestUpdate = objectStore.put(data, 1);
						requestUpdate.onsuccess = function(e){
							component.chooseViewProgram();
							console.log("Reminder Succesfully Added.")
						}
						requestUpdate.onerror = function(e){
							console.log("Error in adding reminder!");
						}

					}

					requestGet.onerror = function(e){

					}
		}
		request.onerror = function(e){

		}

	}

	deleteProgram(index){
			let request = indexedDB.open('opcoursedata', 1);
			let db="";

			request.onsuccess = function(e){
				db = e.target.result;

					let transaction = db.transaction(['availablePrograms'], "readwrite");
					let objectStore = transaction.objectStore('availablePrograms');
					let requestGet = objectStore.get(1);
					
						requestGet.onsuccess = function(e){
							let data = event.target.result;
								data.splice(index, 1);
							let requestUpdate = objectStore.put(data, 1);
							requestUpdate.onsuccess = function(e){
								component.chooseViewProgram();
								console.log("Program Succesfully Deleted.")
							}
							requestUpdate.onerror = function(e){
								console.log("Error in adding reminder!");
							}
						}

						requestGet.onerror = function(e){

						}
			}
			request.onerror = function(e){

			}
	
	}

	updateProgram(y){
		let request = indexedDB.open('opcoursedata', 1);
		let db="";

		request.onsuccess = function(e){
			db = e.target.result;
				let transaction = db.transaction(['availablePrograms'], "readonly");
				let objectStore = transaction.objectStore('availablePrograms');
				let requestGet = objectStore.get(1);

					requestGet.onsuccess = function(e){
						let data = event.target.result;

								let editProgramCode = `<input style="background-color:#fff;border-radius:3px;text-align:center;margin-top:-5px;" id="updatedProgramCode" value="${data[y].code}" placeholder="Program Code"/></input>`;
								let editProgramName = `<input style="background-color:#fff;border-radius:3px;margin-top:-5px;" id="updatedProgramName" value="${data[y].name}" placeholder="Program Name"/></input>`;
								let editProgramType = `<input style="background-color:#fff;border-radius:3px;margin-top:-5px;" id="updatedProgramType" value="${data[y].type}" placeholder="Program Type"/></input>`;
								let editProgramDuration = `<input style="background-color:#fff;border-radius:3px;margin-top:-5px;" id="updatedProgramDuration" value="${data[y].duration}" placeholder="Program Duration"/></input>`;
								// let editProgramDate = `<input style="background-color:#fff;border-radius:3px;margin-top:-5px;" id="updatedProgramDate" value="${data[y].date}" placeholder="Program Date"/></input>`;

								document.getElementById('programCode').innerHTML = editProgramCode;
								document.getElementById('programName').innerHTML = editProgramName;
								document.getElementById('programType').innerHTML = editProgramType;
								document.getElementById('programDuration').innerHTML = editProgramDuration;
								document.getElementById('programAdded').innerHTML = data[y].addedBy;
								$('#saveButton').show();
								console.log("SaveButtonShow");
					}

					requestGet.onerror = function(e){

					}
		}
		request.onerror = function(e){

		}
	}

	saveUpdatedProgram(y){
		let newProgramCode = document.getElementById('updatedProgramCode').value;
		let newProgramName = document.getElementById('updatedProgramName').value;
		let newProgramType = document.getElementById('updatedProgramType').value;
		let newProgramTerm = "";
		let newProgramDuration = document.getElementById('updatedProgramDuration').value;
		// let newProgramDate = document.getElementById('updatedProgramDate').value;
		$('#saveButton').hide();

			if(newProgramType=="Trimestral"){
				newProgramTerm=3;
			}
			else if (newProgramType=="Semestral"){
				newProgramTerm=2;
			}
			console.log(newProgramTerm);

		let request = indexedDB.open('opcoursedata', 1);
		let db="";

		request.onsuccess = function(e){
			db = e.target.result;
				let transaction = db.transaction(['availablePrograms'], "readwrite");
				let objectStore = transaction.objectStore('availablePrograms');
				let requestGet = objectStore.get(1);

					requestGet.onsuccess = function(e){
						let data = event.target.result;

							data[y].name = newProgramName;
							data[y].code = newProgramCode;
							data[y].type = newProgramType;
							data[y].terms = newProgramTerm;
							data[y].duration = newProgramDuration;
							// data[y].date = newProgramDate;
								document.getElementById('programCode').innerHTML = newProgramCode;
								document.getElementById('programName').innerHTML = newProgramName;
								document.getElementById('programType').innerHTML = newProgramType;
								document.getElementById('programTerms').innerHTML = newProgramTerm;
								document.getElementById('programDuration').innerHTML = newProgramDuration;
								// document.getElementById('programDate').innerHTML = newProgramDate;
							objectStore.put(data, 1);

						let requestUpdate = objectStore.put(data, 1);
						requestUpdate.onsuccess = function(e){
							console.log("Reminder Succesfully Added.")
						}
						requestUpdate.onerror = function(e){
							console.log("Error in adding reminder!");
						}

					}

					requestGet.onerror = function(e){

					}
		}
		request.onerror = function(e){

		}

	}

	updateSettings(){
		let request = indexedDB.open('opcoursedata', 1);
		let db="";

		request.onsuccess = function(e){
			db = e.target.result;
				let transaction = db.transaction(['userInfo'], "readwrite");
				let objectStore = transaction.objectStore('userInfo');
				let requestGet = objectStore.get(1);

					requestGet.onsuccess = function(e){
						let data = event.target.result;

						let switchValue = data.localNotif;
						let passSwitchValue = data.userPassword;
							let editProgramCode = `<a style="margin-top:-5px;width:100%;" id="catchProgram" class="waves-effect waves-light btn modal-trigger" href="#programModal">${data.pcode}</a>`;
							let editNotification = `<div class="switch">
													    <label>
													      Off
													      <input id="notifySwitch" type="checkbox">
													      <span class="lever"></span>
													      On
													    </label>
													 </div>`;

							if(data.userPassword==true){
								let editPassword = `
								<!--
									<div class="col s6 left-align" style="margin-top:-10px;">
										<input name="usePassword" checked type="radio" onclick="component.passwordFieldShow();" value="yes" id="passwordYes" style="margin-right:15px;"/>
										<label for="passwordYes">Yes</label>
										<input name="usePassword" onclick="component.passwordFieldHide();" type="radio" value="no" id="passwordNo" />
										<label for="passwordNo">No</label>
									</div>
								-->
									<div class="switch">
									    <label>
									      Off
									      <input id="passwordSwitch" onclick="component.passwordFields()" type="checkbox">
									      <span class="lever"></span>
									      On
									    </label>
									 </div>
									<br>
									<div id="ifYes" style="margin-top:15px;display:none">
										<input id="password" value="${data.password}" style="background-color:#fff;width:80%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;" minlength:"3" maxlength="8" type="password" placeholder="Password" required/>
										<input id="passwordConfirm" value="${data.password}" style="background-color:#fff;width:80%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;" minlength:"3" maxlength="8" type="password" placeholder="Password" required/>
										<p id="passNotMatch" style="color:red;display:none;">Password did not matched!</p>
									<div>
									`;
									document.getElementById('userProgram').innerHTML = editProgramCode;
									document.getElementById('userNotify').innerHTML = editNotification;
									document.getElementById('passwordCheck').innerHTML = editPassword;


									$('#editSettingBtn').hide();
									$('#saveSettingBtn').show();
							}
							else {
								let editPassword = `
									<!--
									<div class="col s6 left-align" style="margin-top:-10px;">
										<input name="usePassword" type="radio" onclick="component.passwordFieldShow();" value="yes" id="passwordYes" style="margin-right:15px;"/>
										<label for="passwordYes">Yes</label>
										<input name="usePassword" checked onclick="component.passwordFieldHide();" type="radio" value="no" id="passwordNo" />
										<label for="passwordNo">No</label>
									</div>
									-->
									<div class="switch">
									    <label>
									      Off
									      <input id="passwordSwitch" onclick="component.passwordFields()" type="checkbox">
									      <span class="lever"></span>
									      On
									    </label>
									 </div>
									<br>
									<div id="ifYes" style="margin-top:15px;display:none;" >
										<input id="password" style="background-color:#fff;width:80%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;" minlength:"3" maxlength="8" type="password" placeholder="Password" required/>
										<input id="passwordConfirm" value="${data.password}" style="background-color:#fff;width:80%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;" minlength:"3" maxlength="8" type="password" placeholder="Password" required/>
										<p id="passNotMatch" value="${data.password}" style="color:red;display:none;"> Password did not matched!</p>
									<div>
									`;
									document.getElementById('userProgram').innerHTML = editProgramCode;
									document.getElementById('userNotify').innerHTML = editNotification;
									document.getElementById('passwordCheck').innerHTML = editPassword;
									$('#editSettingBtn').hide();
									$('#saveSettingBtn').show();

							}
							if(passSwitchValue==true){
								passwordSwitch.checked = true;
							}
							else{
								passwordSwitch.checked = false;
							}


							if(switchValue==true){
								notifySwitch.checked = true;
							}
							else{
								notifySwitch.checked = false;
							}

					}


					requestGet.onerror = function(e){

					}
		}
		request.onerror = function(e){

		}

	}

	populateSettingProgram(){

		let request = indexedDB.open('opcoursedata', 1);
		let db="";

		request.onsuccess = function(e){
			db = e.target.result;
				let transaction = db.transaction(['availablePrograms'], "readonly");
				let objectStore = transaction.objectStore('availablePrograms');
				let requestGet = objectStore.get(1);

					requestGet.onsuccess = function(e){
						let data = event.target.result;
						let html=``;
						for(let scan=0;scan<data.length;scan++){
							html+= `									
									<p>
										<input name="programGroup" type="radio" value="${data[scan].code}" id="${scan}" />
										<label class="truncate" for="${scan}">${data[scan].name}</label>
									</p>
							`;
						}
						component.reRender2(html, '#programOptions');

					}

					requestGet.onerror = function(e){

					}
		}
		request.onerror = function(e){

		}

	}
	transferCourseSetting(){
		let newProgram = $("input[type='radio'][name='programGroup']:checked").val();
		document.getElementById("catchProgram").innerHTML = newProgram;
	}

	saveSettings(){
		let userChoice = document.getElementById('catchProgram').innerHTML; //programcode
		console.log(userChoice);
		let newUserProgram ="";
		let notify = document.getElementById('notifySwitch').checked;
		// let newUserPassword = $("input[type='radio'][name='usePassword']:checked").val();
		let passwordSwitch = document.getElementById('passwordSwitch').checked;
		let newPassword = document.getElementById('password').value;
		let passwordConfirm = document.getElementById('passwordConfirm').value;
		let request = indexedDB.open('opcoursedata', 1);
		let db="";
		request.onsuccess = function(e){
			db = e.target.result;
			let transaction = db.transaction(['availablePrograms'], "readonly");
			let objectStore = transaction.objectStore('availablePrograms');
			let requestGetProg = objectStore.get(1);

				requestGetProg.onsuccess = function(e){
					let programs = event.target.result;
						for(let scan=0;scan<programs.length;scan++){
							if(programs[scan].code==userChoice){
									newUserProgram=programs[scan].name;
							}
						}
							let transaction = db.transaction(['userInfo'], "readwrite");
							let objectStore2 = transaction.objectStore('userInfo');
							let requestGet = objectStore2.get(1);

								requestGet.onsuccess = function(e){
									let data = event.target.result;
									let previousProgram = data.program;
									if(previousProgram!=newUserProgram){
										component.resetCourses();
									}

									if(passwordSwitch==true){
										if(newPassword==passwordConfirm){
											data.program = newUserProgram;
											data.pcode = userChoice;
											data.localNotif = notify;
											data.userPassword = passwordSwitch;
											data.password = newPassword;
											let requestUpdate = objectStore2.put(data, 1);
											requestUpdate.onsuccess = function(e){
												component.settings();
											}
											console.log("READ YES!");
										}
										else{
											$('#passNotMatch').show();
											console.log("READ NO!");
										}
									}
									else if(passwordSwitch==false){
											data.userPassword = passwordSwitch;
											data.program = newUserProgram;
											data.localNotif = notify;
											data.pcode = userChoice;
											let requestUpdate = objectStore2.put(data, 1);
											requestUpdate.onsuccess = function(e){
												component.settings();
											}
											console.log("READ Choose no!");
									}

								}

								requestGet.onerror = function(e){

								}

				}

		}
		request.onerror = function(e){

		}

	}
	resetCourses(){

		let request = indexedDB.open('opcoursedata', 1);
		let db="";
			request.onsuccess = function(e){
				db = event.target.result;
				let transaction = db.transaction(['courses2'], "readwrite");
				let objectStore = transaction.objectStore('courses2');
				let requestGetCourses = objectStore.get(1);
					requestGetCourses.onsuccess = function(e){
					let courses = event.target.result;

							for(let x=0;x<courses.length;x++){
									if(courses[x].stat=="INPROGRESS"){

											courses[x].schedule.M ="false";
											courses[x].schedule.T ="false";
											courses[x].schedule.W ="false";
											courses[x].schedule.TH ="false";
											courses[x].schedule.F ="false";
											courses[x].schedule.S ="false";
											courses[x].schedule.SU ="false";
										}
										courses[x].stat="NOT TAKEN";
						}
						objectStore.put(courses, 1);
					}

			}

	}

	addNewCourse(y){
		let courseProgram="";
		let courseYear = $("#selectCourseYear option:selected").text();
			let	courseYear2=courseYear.charAt(0);
		let courseTerm = $("#selectCourseTerm option:selected").text();
			let courseTerm2=courseTerm.charAt(0);
		let courseCode = document.getElementById('newCourseCode').value;
		let courseDesc = document.getElementById('newCourseDesc').value;
		let coursePre = document.getElementById('newCoursePre').value;
		let courseUnits= document.getElementById('newCourseUnits').value;

		let request = indexedDB.open('opcoursedata', 1);
		let db="";
			request.onsuccess = function(e){
				db = event.target.result;

				let transaction = db.transaction(['availablePrograms'], "readwrite");
				let objectStore = transaction.objectStore('availablePrograms');
				let requestGet = objectStore.get(1);
					requestGet.onsuccess = function(e){
					let data = event.target.result;
						courseProgram = data[y].code;

					}

				let transaction2 = db.transaction(['courses2'], "readwrite");
				let objectStore2 = transaction2.objectStore('courses2');
				let requestGetCourses = objectStore2.get(1);
					requestGetCourses.onsuccess = function(e){
					let courses = event.target.result;

						let newCourse =	{
								"program": courseProgram,
								"year":courseYear2,
								"sem": courseTerm2,
								"idc": courseCode,
								"des": courseDesc,
								"prerequisite": coursePre,
								"unit": courseUnits,
								"stat": "NOT TAKEN",
								"grade":"N/A",
								"schedule":{
									"M":"false",
									"T":"false",
									"W":"false",
									"TH":"false",
									"F":"false",
									"S":"false",
									"SU":"false"
								}
							}
						// let parsedCourse = JSON.parse(JSON.stringify(newCourse));
						courses.push(newCourse);
						objectStore2.put(courses, 1);
						console.log("ADD COURSE READ!");
					}
			}


	}
	deleteCourse(index){
			let request = indexedDB.open('opcoursedata', 1);
			let db="";

			request.onsuccess = function(e){
				db = e.target.result;

					let transaction = db.transaction(['courses2'], "readwrite");
					let objectStore = transaction.objectStore('courses2');
					let requestGet = objectStore.get(1);
					
						requestGet.onsuccess = function(e){
							let data = event.target.result;
								data.splice(index, 1);
							let requestUpdate = objectStore.put(data, 1);
							requestUpdate.onsuccess = function(e){
								component.viewOtherCourses();
								console.log("Program Succesfully Deleted.")
							}
							requestUpdate.onerror = function(e){
								console.log("Error in adding reminder!");
							}
						}

						requestGet.onerror = function(e){

						}
			}
			request.onerror = function(e){

			}

	}

	checkdataExist(){
		var connectedRef = firebase.database().ref(".info/connected");
		let backupID = document.getElementById('backupDataID').value;
		let countTrue=0;
		let opcoursedata = firebase.database().ref('userInfo').once('value', 
							(userData)=>{
								userData.forEach(function (snapshot){
									
									if(backupID == snapshot.key){
										let userData = snapshot.val();
											let request = indexedDB.open('opcoursedata', 1);
												request.onsuccess = function(e){
												let db = event.target.result;
													let transaction1 = db.transaction(['userInfo'], "readwrite");
													let objectStore1 = transaction1.objectStore('userInfo');
													let requestGetUserInfo = objectStore1.get(1);
														requestGetUserInfo.onsuccess = function(e){
														let data = event.target.result;
															data.fbBackupPassword = userData.backupPassword;
															objectStore1.put(data, 1);
														}//requestGetUserInfo close
											}

										countTrue++;
									}
									component.backupResultPageTrue(countTrue, backupID);
								});
							});
	}

	checkdataRestore(){
		var connectedRef = firebase.database().ref(".info/connected");
		let restoreID = document.getElementById('restoreDataID').value;
		let countTrue=0;
		let opcoursedata = firebase.database().ref('userInfo').once('value', 
							(userData)=>{
								userData.forEach(function (snapshot){
									
									if(restoreID == snapshot.key){
										let userData = snapshot.val();
											let request = indexedDB.open('opcoursedata', 1);
												request.onsuccess = function(e){
												let db = event.target.result;
													let transaction1 = db.transaction(['userInfo'], "readwrite");
													let objectStore1 = transaction1.objectStore('userInfo');
													let requestGetUserInfo = objectStore1.get(1);
														requestGetUserInfo.onsuccess = function(e){
														let data = event.target.result;
															data.fbBackupPassword = userData.backupPassword;
															objectStore1.put(data, 1);
														}//requestGetUserInfo close
											}

										countTrue++;
									}
									component.restoreResultPage(countTrue, restoreID);
								});
							});
	}

	checkBackupPasswordforBackup(backupID){
		console.log(backupID);
		let verifyPassword = document.getElementById('checkBackupPassword').value;
		console.log(verifyPassword);
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
			let db = event.target.result;
				let transaction1 = db.transaction(['userInfo'], "readonly");
				let objectStore1 = transaction1.objectStore('userInfo');
				let requestGetUserInfo = objectStore1.get(1);
					requestGetUserInfo.onsuccess = function(e){
					let data = event.target.result;
						console.log(data);
						if(verifyPassword == data.fbBackupPassword){
							component.sendData(backupID);
							document.getElementById('mismatched').innerHTML = "Data saved successfully!"
						}
						else {
							document.getElementById('mismatched').innerHTML = "Password did no matched. Please try again."
						}

					}//requestGetUserInfo close
		}

	}
	checkBackupPasswordforRestore(backupID){
		console.log(backupID);
		let verifyPassword = document.getElementById('checkRestorePassword').value;
		console.log(verifyPassword);
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
			let db = event.target.result;
				let transaction1 = db.transaction(['userInfo'], "readonly");
				let objectStore1 = transaction1.objectStore('userInfo');
				let requestGetUserInfo = objectStore1.get(1);
					requestGetUserInfo.onsuccess = function(e){
					let data = event.target.result;
						if(verifyPassword == data.fbBackupPassword){
							component.retrieveData(backupID);

						}
						else {
							document.getElementById('mismatched').innerHTML = "Password did no matched. Please try again."
						}

					}//requestGetUserInfo close
		}

	}

	sendData(backupID){
		console.log(backupID);
		var connectedRef = firebase.database().ref(".info/connected");
		connectedRef.on("value", function(snap) {
		  if (snap.val() === true) {
			    Materialize.toast('Connected', 2000);
			  	$('.toastConnect').fadeOut();
			  	clearTimeout(internet);

			  	// document.getElementById('backupResults').innerHTML="Sending Data...";
				// document.getElementById('backupResults').style.display ='block';
				let backupDataID = backupID;
				let idMatched="";
				let userInfo ={};
				let courses =[];
									let request = indexedDB.open('opcoursedata', 1);
									let db="";
										request.onsuccess = function(e){
											db = event.target.result;
											//request send UserInfo
											let transaction1 = db.transaction(['userInfo'], "readwrite");
											let objectStore1 = transaction1.objectStore('userInfo');

											let requestGetUserInfo = objectStore1.get(1);
												requestGetUserInfo.onsuccess = function(e){
												userInfo = event.target.result;
												userInfo.backupID = backupDataID;
													let keyId = firebase.database().ref().child('/userInfo/').push().key;
													let dummyCourse = userInfo;
													let updates = {};
													updates['/userInfo/'+backupDataID] = dummyCourse;
													firebase.database().ref().update(updates);
													objectStore1.put(userInfo, 1);
													console.log("User Data Sent!");
												}

											//request send courses
											let transaction2 = db.transaction(['courses2'], "readwrite");
												let objectStore2 = transaction2.objectStore('courses2');
												let requestGetCourses = objectStore2.get(1);
													requestGetCourses.onsuccess = function(e){
													courses = event.target.result;

														console.log(courses);
														let keyId = firebase.database().ref().child('/courses/').push().key;
														let dummyCourse = courses;
														let updates = {};
														updates['/courses/'+backupDataID] = dummyCourse;
														firebase.database().ref().update(updates);
													}//requestGetCourses close
												console.log("User Courses Sent!");					


											//request send available programs
											let transaction3 = db.transaction(['availablePrograms'], "readwrite");
												let objectStore3 = transaction3.objectStore('availablePrograms');
												let requestGetPrograms = objectStore3.get(1);
													requestGetPrograms.onsuccess = function(e){
													let programs = event.target.result;

														console.log(programs);
														let keyId = firebase.database().ref().child('/availablePrograms/').push().key;
														let dummyCourse = programs;
														let updates = {};
														updates['/availablePrograms/'+backupDataID] = dummyCourse;
														firebase.database().ref().update(updates);
													}//requestGetCourses close
												console.log("User Programs Sent!");


											//request send reminders
											let transaction4 = db.transaction(['courseReminders'], "readwrite");
												let objectStore4 = transaction4.objectStore('courseReminders');
												let requestGetReminders = objectStore4.get(1);
													requestGetReminders.onsuccess = function(e){
													let reminders = event.target.result;

														console.log(reminders);
														let keyId = firebase.database().ref().child('/courseReminders/').push().key;
														let dummyCourse = reminders;
														let updates = {};
														updates['/courseReminders/'+backupDataID] = dummyCourse;
														firebase.database().ref().update(updates);
													}//requestGetCourses close
												console.log("User Reminders Sent!");
										}//request Database close

				// document.getElementById('backupResults').innerHTML="Data Succesfully Sent!";
				// document.getElementById('backupResults').style.color ='green';

			  	return true;
		  } else {
		     Materialize.toast('Please wait for a moment...', 5000, 'toastConnect');
		    internet = setTimeout(function() {

			    if(internet){
			    	Materialize.toast('Please connect to the internet', 2000, 'toastConnect');
			    	
			    }
		    	
		    }, 5000);
		  }
		});
		
	}

	retrieveData(backupID){
		var connectedRef = firebase.database().ref(".info/connected");
		//check internet
		connectedRef.on("value", function(snap) {
		  if (snap.val() === true) {
		  	Materialize.toast('Connected', 2000);
		  	$('.toastConnect').fadeOut();
		  	clearTimeout(internet);


		 	//  document.getElementById('restoreResults').innerHTML = "Restoring Your Data...";
			// document.getElementById('restoreResults').style.display ='block';
			// document.getElementById('restoreResults').style.color ='#000';
			let restoreID = backupID;

							let opcoursedata = firebase.database().ref('userInfo').once('value', 
							(userData)=>{
								userData.forEach(function (snapshot){
									if(restoreID == snapshot.key){
										console.log(snapshot.val());
										let userData = snapshot.val();
										component.restoreUserData(userData);
									}
									
								});
							});
							opcoursedata = firebase.database().ref('courses').once('value', 
							(courses)=>{

								courses.forEach(function (snapshot){
									if(restoreID == snapshot.key){
										console.log(snapshot.val());
										let userCourses = snapshot.val();
										component.restoreUserCourses(userCourses);
									}
									
								});
							});
							opcoursedata = firebase.database().ref('availablePrograms').once('value', 
							(programs)=>{
								programs.forEach(function (snapshot){
									if(restoreID == snapshot.key){
										console.log(snapshot.val());
										let userPrograms = snapshot.val();
										component.restoreUserPrograms(userPrograms);
									}
									
								});
							});

							opcoursedata = firebase.database().ref('courseReminders').once('value', 
							(reminders)=>{
								reminders.forEach(function (snapshot){
									if(restoreID == snapshot.key){
										console.log(snapshot.val());
										let userReminders = snapshot.val();
										component.restoreUserReminders(userReminders);
									}
									
								});
							});
							return true;
		  } else {
		    Materialize.toast('Please wait for a moment...', 5000, 'toastConnect');
		    internet = setTimeout(function() {

			    if(internet){
			    	Materialize.toast('Please connect to the internet', 2000, 'toastConnect');
			    	
			    }
		    	
		    }, 5000);
		  }
		});
		

	}

	restoreUserData(data){
		console.log("User Data READ!");
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
			let db = event.target.result;

				let transaction1 = db.transaction(['userInfo'], "readwrite");
				let objectStore1 = transaction1.objectStore('userInfo');
				let requestGetUserInfo = objectStore1.delete(1);
					requestGetUserInfo.onsuccess = function(e){
						objectStore1.add(data, 1);
					}//requestGetUserInfo close

		}//OpenDB

	}

	restoreUserCourses(data){
		console.log("Course READ!");
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
			let db = event.target.result;

				let transaction1 = db.transaction(['courses2'], "readwrite");
				let objectStore1 = transaction1.objectStore('courses2');
				let requestGetUserInfo = objectStore1.delete(1);
					requestGetUserInfo.onsuccess = function(e){
						objectStore1.put(data, 1);
					}//requestGetUserInfo close

		}//OpenDB	

	}

	restoreUserPrograms(data){
		console.log("Program READ!");
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
			let db = event.target.result;

				let transaction1 = db.transaction(['availablePrograms'], "readwrite");
				let objectStore1 = transaction1.objectStore('availablePrograms');
				let requestGetUserInfo = objectStore1.delete(1);
					requestGetUserInfo.onsuccess = function(e){
						// document.getElementById('restoreResults').innerHTML = "Restoring Data Successful!";
						// document.getElementById('restoreResults').style.display ='block';
						// document.getElementById('restoreResults').style.color ='green';
						document.getElementById('mismatched').innerHTML = "Data restored successfully!";
						console.log("READ!");
						objectStore1.put(data, 1);
					}//requestGetUserInfo close

		}//OpenDB

	}
	restoreUserReminders(data){
		console.log("reminder READ!");
		let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
			let db = event.target.result;

				let transaction1 = db.transaction(['courseReminders'], "readwrite");
				let objectStore1 = transaction1.objectStore('courseReminders');
				let requestGetUserInfo = objectStore1.delete(1);
					requestGetUserInfo.onsuccess = function(e){
						// document.getElementById('restoreResults').innerHTML = "Restoring Data Successful!";
						// document.getElementById('restoreResults').style.display ='block';
						// document.getElementById('restoreResults').style.color ='green';
						console.log("READ!");
						objectStore1.put(data, 1);
					}//requestGetUserInfo close

		}//OpenDB
	}



	setLocalDaily(){

		cordova.plugins.notification.local.schedule({
			id: 1,
		    title: 'OPcourse Notification Success!',
		    trigger: { in: 1, unit: 'minute' }
		});

	}
	setLocalReminderNOW(){
		Materialize.toast("REMIND", 2000);
		cordova.plugins.notification.local.schedule({
                    id: 1,
                    text: 'Test Message 1',
                    icon: 'http://3.bp.blogspot.com/-Qdsy-GpempY/UU_BN9LTqSI/AAAAAAAAAMA/LkwLW2yNBJ4/s1600/supersu.png',
                    smallIcon: 'res://cordova',
                    sound: null,
                    badge: 1,
                    data: { test: id }
                });


	}
	setLocalReminder2(){
		cordova.plugins.notification.local.schedule({
		    title: 'My first notification',
		    text: 'Congrats Luie...',
		    foreground: true
		});
	}
	setLocalReminder3(reminderID, date, time, reminderType){
		let receivedDate = date.split(" ");
		let day = parseInt(receivedDate[0]);
		let month = receivedDate[1];
		let year = parseInt(receivedDate[2]);

			if(month.includes("January")){
				month = 0;
			}
			else if(month.includes("February")){
				month = 1;
			}
			else if(month.includes("March")){
				month= 2;
			}
			else if(month.includes("April")){
				month= 3;
			}
			else if(month.includes("May")){
				month= 4;
			}
			else if(month.includes("June")){
				month= 5;
			}
			else if(month.includes("July")){
				month= 6;
			}
			else if(month.includes("August")){
				month= 7;
			}
			else if(month.includes("September")){
				month= 8;
			}
			else if(month.includes("October")){
				month= 9;
			}
			else if(month.includes("November")){
				month= 10;
			}
			else if(month.includes("December")){
				month= 11;
			}

			let receivedTime = time.split(":");
			let hour = parseInt(receivedTime[0]);
			let minute = receivedTime[1];
			let minuteINT = parseInt(minute);
			if(minute.includes("AM")){
				if(hour==12){
					hour=0;
				}
			}
			else{
				if(minute.includes("PM")){
					hour = hour+12
				}
			}
			console.log(year, month, day, hour, minuteINT);
			cordova.plugins.notification.local.schedule({
				id: reminderID,
			    title: "OPcourse Reminder",
			    text: "You have a scheduled "+reminderType+" today",
			    smallIcon: 'res://icons/android/icon-36-ldpi',
			    trigger: { at: new Date(year, month, day, hour, minuteINT) }
			});


	}

	previousPageCheck(progIndex, option){
		if (option == 1){
			component.viewMyCourses();
			component.displayMyCourses(option);
		}
		else if (option ==2){
			let y = progIndex;
			component.viewOtherCourses(y)
			console.log("read!");
			component.displayOtherCourses(y, option);

		}

	}

	progressBar(progress) {
	  //dra gisulod ang result sa pag count all courses divided by completed
	  var elem = document.getElementById("progressPercent");  
	  //width..mao na tong number nga mga iterate.. 
		  var width = 1;
		    var id = setInterval(frame, 10);
		    function frame() {
		        if (width >= progress) {
		            clearInterval(id);
		        } else {
		        	//width++ mao ni dri makita nmo animated counting sa number
		            width++; 
		            elem.style.width = width + '%';
		            elem.innerHTML = width * 1 + '%'
		            //kung mag match na sila sa progress, madungagan ug % complete ang number nga mag display
		            if(width==progress){
		            	elem.innerHTML = width * 1 + '% Complete'
		            }

		        }
		    }

	}

}

	class Component extends App{
		constructor(){
			super();

		}

		setupSuccess(){

			let html = `
				<div class="row" style="color:#000;">
					<div class="col s12 headload" style="font-size:20px;">
					<div class="text-align:center;" style="font-size:50px;color:#000;">Hurray!</div>
					Initial Setup Success!</div>
					<div class="col s12 center-align" style="width: 100%;height: 320px;overflow: hidden;margin-top:-40px;">
						<img style="height:210px;margin-top:45px;opacity:.8;" src="img/setupsuccess1.gif">
					<div>
					<br>
					<center style="color:#000;font-weight:300;">Loading Dashboard..</center>
				</div>
				`;
				this.reRender2(html, '#app');
				setTimeout(function(){
						component.studentDashboard();
						component.listHomeSched();
				},1200);

		}
		studentDashboard(){
					let html = `			
						<div>

								<nav>
									<div class="nav-wrapper">
										<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Home</span></a>
										<a href="#" data-activates="home-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
										<a onclick="component.aboutApp()" class="right" style="margin:-6px 20px 0 0;"><i style="font-size:18px;" class="fa fa-info" aria-hidden="true"></i></a>

										<ul class="side-nav" id="home-Nav">
											<div class="side-header row">
												<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
											</div>

											<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
											<li><a onclick="component.aboutApp()"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
										
										</ul>
									</div>
								</nav>
						</div>

						<div class="row header" style="margin-bottom:0;">
								<div class="row" style="min-height:60%;">
									<div id="Todaysday" class="col s12 todays">

									</div>
								</div>
							
								<div class="row" style="margin: 0 15% 0 17%;">
										<a class="col s3 circle" onclick="component.backupAndRestorePage()" style="background-color:#673ab7;height:50px;width:50px;font-size:15px;padding-top:13px;padding-left:17px;margin-left:4%;">
												<i class="fa fa-cloud-upload" aria-hidden="true"></i>
										</a>

										<a class="col s3 circle" onclick="component.myNotification()" style="background-color:#ef5350;height:50px;width:50px;font-size:15px;padding-top:13px;padding-left:17px;margin-left:8px;">
												<i class="fa fa-bell-o" aria-hidden="true"></i>
										</a>

										<a class="col s3 circle" onclick="component.coursesInProgress();" style="background-color:#00e676;height:50px;width:50px;font-size:15px;padding-top:13px;padding-left:18px;margin-left:8px;">
											<i class="fa fa-hourglass-half" aria-hidden="true"></i>
										</a>

										<a class="col s3 circle" onclick="component.myProfile()" style="background-color:#2196f3;height:50px;width:50px;font-size:15px;padding-top:13px;padding-left:18px;margin-left:8px;margin-right:4%;">
												<i class="fa fa-user-o" aria-hidden="true"></i>
										</a>

								</div>
						</div>

						<div class="row header-content" style="margin-bottom:0;min-height:30%;background-color:#f2f6fa">
						
							 <div class="row" style="margin-bottom:0;min-height:100%;">
							    <div class="col s12" style="padding:0;">
							      <ul class="tabs">
							        <li class="tab col s3"><a class="active" href="#tab1" onclick="component.listHomeSched();">Today</a></li>
							        <li class="tab col s3"><a  href="#tab2" onclick="component.listHomeWeekly();">Tomorrow</a></li>
							      </ul>
							    </div>

							    <div id="tab1" class="col s12 slide-contents" style="padding:0;background-color:#f2f6fa;min-height:100%;margin-bottom:0;">
							    	<ul id="homeSchedule" style="border:0;margin-top:0.1px;" class="collapsible" data-collapsible="accordion">


									</ul>

							    </div>
							    <div id="tab2" class="col s12 slide-contents" style="padding:0;margin-bottom:0;">
							    	<ul id="homeScheduleTom" style="border:0;margin-top:0.1px;" class="collapsible" data-collapsible="accordion">

									</ul>

							    </div>
							 </div>
						

						</div>

					`;
					this.reRender2(html, '#app');
					component.currentDay();
					Materialize.fadeInImage('#Todaysday');
					component.listHomeSched();
					component.listHomeTomorrow();


		}

		setup(){
				let html= `
					<div class="row center-align">
						<div class="col s12" style="margin-top:40px;font-weight:400;letter-spacing:-1px;font-size:23px;">
				          Account Setup
				        </div>

					</div>

				<div class="row" style="margin-right:10%;margin-left:10%;margin-top:30px;margin-bottom:25px;">
					<div class="col s4" style="border: 3px solid #fff;height:70px;width:70px;border-radius:50%;background-color:#bcbcbc;margin-left:17px;">

					</div>

					<div class="col s4" style="border: 3px solid #fff;height:70px;width:70px;border-radius:50%;background-color:#bcbcbc;margin-left:17px;">

					</div>

					<div class="col s4" style="border: 3px solid #fff;height:70px;width:70px;border-radius:50%;background-color:#bcbcbc;margin-left:17px;">

					</div>

				</div>

				 <div class="row" style="margin-bottom:15px;">				
							<div class="center-align col s12" style="width:65%;font-size:14px;font-weight:300;background-color:#e57373;border-radius:5px;height:45px;margin-left:17%;margin-right:18%;">
								    <select id="selectProgram" style="color:#fff;" required>

								    </select>
							</div>
				</div>

				<div class="row">		
							<div class="col s12 center-align">
								<input id="displayName" class="validate" style="background-color:#fff;width:60%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;margin-top:18px;margin-bottom:5px;" maxlength="20" type="text" placeholder="Display Name" required/>
								<br>
								<input id="backupPassword" class="validate" style="background-color:#fff;width:60%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;margin-top:18px;margin-bottom:5px;" maxlength="20" type="text" placeholder="Data Backup Password" required/>
								<br>
								<div class="col s6" style="padding:0;">
							  		<p style="color:#757575;margin-left:26px;font-size:12px;">Use an app Password?</p>
							  	</div>

							  	<div class="col s6 left-align" style="margin-top:10px;margin-left:-6px;">
								      <input name="usePassword"  type="radio" onclick="component.passwordFieldShow();" value="yes" id="passwordYes"  style="margin-right:15px;"/>
								      <label style="font-size:12px;" for="passwordYes">Yes</label>
								      <input name="usePassword" onclick="component.passwordFieldHide();" type="radio" value="no" id="passwordNo" />
								      <label style="font-size:12px;" for="passwordNo">No</label>
								</div>
								<div id="ifYes" style="display:none">
									
									<input id="password" class="validate" style="background-color:#fff;width:60%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;" minlength:"3" maxlength="8" type="password" placeholder="Password" required/>
									
									<input id="passwordConfirm" class="validate" style="background-color:#fff;width:60%;padding-left:15px;padding-right:15px;font-size:14px;font-weight:300;border-radius:5px;" minlength:"3" maxlength="8" type="password" placeholder="Confirm Password" required/>
									<div id="passNotMatch" style="display:none;color:red;">Password did not matched!</div>
								<div>
							</div>
				</div>
				 

				<div class="row">
							<div class="col s12">
								<center><div id="errorInfo" style="color:red;"></div></center>
							</div>
							<div class="col s6 center-align" style="margin-top:30px;margin-left:50%;">
								<button onclick="component.validateSetUp();" class="waves-effect waves-light btn" >Next</button>
							</div>


				</div>	

				`;

				this.reRender2(html, '#app');
				component.availableProgram();
		}

		addProgramSetup(){
			let date = new Date();
			let day = date.getDay();
			let monthNum = date.getMonth();
			let month="";
			let daynum = date.getDate();
			let year = date.getFullYear();

			if (monthNum ==0){
				month = "January";
			}
			else if (monthNum ==1){
				month = "February";
			}
			else if (monthNum ==2){
				month = "March";
			}
			else if (monthNum ==3){
				month = "April";
			}
			else if (monthNum ==4){
				month = "May";
			}
			else if (monthNum ==5){
				month = "June";
			}
			else if (monthNum ==6){
				month = "July";
			}
			else if (monthNum ==7){
				month = "August";
			}
			else if (monthNum ==8){
				month = "September";
			}
			else if (monthNum ==9){
				month = "October";
			}
			else if (monthNum ==10){
				month = "November";
			}
			else if (monthNum ==11){
				month = "December";
			}


			let progName = document.getElementById("programName").value;
			let code = document.getElementById("programCode").value;
			let duration = $("#reminderType option:selected").text();		
			let system = $("input[type='radio'][name='teachingSystem']:checked").val();
			console.log(system);

			if(duration == 1){
				duration = duration;
			}
			else{
				duration = duration;
			}

			let term="";
				if(system=="Trimestral"){
					term=3;
				}
				else if (system=="Semestral"){
					term=2;
				}
			let addedBy = "User";
			let programAdded = daynum+" "+month+", "+year;

			let newProgram = {
					"name":progName,
					"code":code,
					"type":system,
					"terms":term,
					"duration":duration,
					"date":programAdded,
					"addedBy":addedBy
			};

			if(newProgram.name =="" || newProgram.code=="" || newProgram.type==undefined || newProgram.terms ==""){
				document.getElementById("errorCatch").innerHTML = "All fields are required"

			}
			else{
					let request = indexedDB.open('opcoursedata', 1);
					let db="";

					request.onsuccess = function(e){
						db = e.target.result;

							let transaction = db.transaction(['availablePrograms'], "readwrite");
							let objectStore = transaction.objectStore('availablePrograms');
							let requestGet = objectStore.get(1);

								requestGet.onsuccess = function(e){
									let data = event.target.result;
										data.push(newProgram);
									let requestUpdate = objectStore.put(data, 1);
									requestUpdate.onsuccess = function(e){
										// component.chooseViewProgram();

										let transaction2 = db.transaction(['userInfo'], "readwrite");
										let objectStore2 = transaction2.objectStore('userInfo');
										let requestGetUSER = objectStore2.get(1);

											requestGetUSER.onsuccess = function(e){
												let data = event.target.result;
												data.program = progName;
												data.pcode = code;
												data.programSystem = system;
												data.programDuration = duration;

												objectStore2.put(data, 1);
												component.programNotListed();

											}

									}
									requestUpdate.onerror = function(e){
										console.log("Error in adding reminder!");
									}

								}


					}
					request.onerror = function(e){

					}

			}


		}

		addProgamSetupPage(){

						let html=`
							<nav>
								<div class="nav-wrapper">
									<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Add Your Program</span></a>
									
									

									<ul class="side-nav" id="settings-Nav">
										<div class="side-header row">
											<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
										</div>

										<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Overview</a></li>
										<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>View Programs</a></li>
										<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');""><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
										<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Guide</a></li>
										<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>Settings</a></li>
										<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
									</ul>
								</div>
							</nav>

							<div style="margin-top:30px;">
								<div class="row" style="margin-bottom:0;">
									<div class="col s4" style="text-align:center;padding-top:10px;">Program Name:</div>
									<div clas="col s8">
										<input id="programName" placeholder="Ex: Computer Science"  style="background-color:#fff;width:53%;margin-left:10px;padding-left:13px;" type="text">
									</div>
								</div>


								<div class="row" style="margin-bottom:0;">
									<div class="col s4" style="text-align:center;padding-top:10px;">Program Code:</div>
									<div clas="col s8">
										<input id="programCode" placeholder="Ex: CS or HRM" style="background-color:#fff;width:53%;margin-left:10px;padding-left:13px;" type="text">
									</div>
								</div>

								<div class="row">
									<div class="col s4" style="padding:6px 0 6px 0;text-align:center;">Type</div>
									<div class="center-align col s8" style="width:56%;font-size:14px;font-weight:300;background-color:#e57373;border-radius:2px;height:45px;margin-left:3%;">
									    <select id="reminderType" style="color:#fff;" required>
										      <option value="" disabled selected>Choose Program Duration</option>
										      <option value="1">1</option>
										      <option value="2">2</option>
										      <option value="3">3</option>
										      <option value="4">4</option>
										      <option value="5">5</option>
									    </select>
									</div>


								</div>

								<div class="row" style="margin-bottom:0;">
									<div class="col s4" style="text-align:center;padding-top:10px;">System:</div>
									<div clas="col s8" style="padding-top:10px;">
									      <input name="teachingSystem" value="Semestral" type="radio" id="test1" />
									      <label for="test1">Semestral</label>
									      <input name="teachingSystem" value="Trimestral" type="radio" id="test2" />
									      <label for="test2">Trimestral</label>

										</div>
								</div>								

							</div>

						<div class="row">
								<div id="errorCatch" class="col s12 center-align" style="margin-top:30px;color:red;padding-top:8px;">
									Done?</br>
								</div>

								<div class="col s6 center-align" style="margin-left:50%; margin-top:30px;">
									<button onclick="component.addProgramSetup()" class="waves-effect waves-light btn">Lez go!</button>
								</div>

							</div>	
							
						`;
						component.reRender2(html, '#app');	


		}

		setupTips(){
						let html = `

						<div class="row center-align" style="margin-top:30px;margin-bottom:30px;">
							<div class="col s12" style="margin-top:20px;font-weight:400;font-size:25px;color:#212121;">
					          Quick Select Courses
					        </div>
						</div>

						<div class="row">
							<div class="col s12" style="padding-left:40px;padding-right:40px;font-size:13px;color:#757575;font-weight:200;">
								If you are already have progress on your program, the next page will help you quickly select completed and inprogress courses. Otherwise, if you are just getting started your program may choose courses as inprogress. 
								<br><br>For other app functionalities such as storing your grades, you may visit App Guide page later.  
							</div>

						</div>

						<div class="row">
									  <ul class="collapsible" data-collapsible="accordion" style="box-shadow:none;border:none;background-color:transparent;margin:0;">
									    <li style="background-color:transparent;border:0;padding-left:10%;padding-right:10%;">
									      <div style="background-color:transparent;border:none;color:#4caf50;" class="collapsible-header"><i class="fa fa-question-circle"></i>Adding Courses as In-Progress</div>
									      <div style="background-color:none;border:none;" class="collapsible-body">
												<div class="row">
													<div class="col s3" style="margin-top:7px;">
														<img class="circle" src="img/add.jpg" style="height:60px;width:60px;opacity:.8;">
													</div>
													<div class="col s9" style="padding-left:10px;padding-right:35px;font-size:12px;color:#757575;font-weight:200;">
														These are the courses you are currently taking. To add a course as "in progress", tap your schedule and the add button as seen on the picture.
													</div>

												</div>
									      </div>
									    </li>
									    <li style="background-color:none;border:0;padding-left:10%;padding-right:10%;">
									      <div style="background-color:transparent;border:none;color:#ef5350;" class="collapsible-header"><i class="fa fa-question-circle"></i>Add Courses as Completed</div>
									      <div style="background-color:none;border:none;" class="collapsible-body">
													<div class="col s3" style="margin-top:7px;">
														<img class="circle" src="img/complete.jpg" style="height:60px;width:60px;opacity:.8;">
													</div>
													<div class="col s9" style="padding-left:10px;padding-right:35px;font-size:12px;color:#757575;font-weight:200">
														Courses that were already taken and completed. To add as completed, just click the done button as seen on the picture.
													</div>
									      </div>
									    </li>
									  </ul>
						</div>

						<div class="col s12 center-align" style="margin-top:30px;">
										<button style="width:50%;" onclick="component.quickSelecCoursePage()" class="waves-effect waves-light btn" >Next</button>
						
						</div>
						`;
						this.reRender2(html, '#app');
						
		}
		programNotListed(){
			let html = `

					<div style="margin-left:5%;margin-right:5%;margin-top:10%;">
						<h5 style="text-align:center;">Your Program was added!</h5>
						<div class="row center-align">
							<div class="col s12" style="font-weight:300;font-size:17px;color:#4caf50;">
					          Next Step
					        </div>
						</div>
						<div class="row">
							<div class="col s12" style="padding-left:37px;padding-right:10px;font-size:13px;color:#757575;font-weight:200;">
								Now that you have added your Program, the next step is adding its courses. Here's how you can add your courses.
							</div>

						</div>


						<div class="row center-align">
							<div class="col s12 " style="font-weight:300;font-size:17px;color:#e57373;">
					          1. View your Program
					        </div>
						</div>
						<div class="row">
							<div class="col s3">
								<img class="circle" src="img/Option.png" style="height:80px;width:80px;">
							</div>
							<div class="col s9" style="padding-left:37px;padding-right:10px;font-size:13px;color:#757575;font-weight:200">
								Go to programs page and find program options as seen on the image.  
							</div>

						</div>

						<div class="row center-align">
							<div class="col s12 " style="font-weight:300;font-size:17px;color:#0097a7;">
					          2. Add Courses
					        </div>
						</div>
						<div class="row">
							<div class="col s3">
								<img class="circle" src="img/Add_Course.png" style="height:80px;width:80px;">
							</div>
							<div class="col s9" style="padding-left:37px;padding-right:10px;font-size:13px;color:#757575;font-weight:200">
								Once the option appears, you will see a "Add Course" option. Tap it and you should be able to add the courses for your program. 
							</div>

						</div>

						<div class="col s12 center-align" style="margin-top:30px;">
										<button style="width:50%;" onclick="component.setupComplete();" class="waves-effect waves-light btn" >Got it!</button>
						
						</div>
					</div>
						`;
						this.reRender2(html, '#app');

		}

		passwordPage(){
			let html= `
					<div class="row center-align">
						<img src="img/passwordpage.jpg" alt="" style="height:250px;weight:250px;margin-top:20%;"/>
					</div>

				<div class="row" style="margin-right:10%;margin-left:10%;margin-top:30px;margin-bottom:25px;">

					<input type="password" id="enteredPassword" placeholder="Enter Password" style="background-color:#fff;border-radius:5px;width:60%;text-align:center;margin-left:20%;margin-right:20%;letter-spacing:1px;"></input>
					<center><p style="color:red;height:30px;" id="passwordIncorrect"></p></center>

				</div>

				<div class="row">
							<div class="col s12 center-align" style="margin-top:10px;">
								<button onclick="component.checkPassword();" class="waves-effect waves-light btn" >Lez Go!</button>
							</div>
				</div>	


				`;
				this.reRender2(html, '#app');

		}
		quickSelecCoursePage(){
			let backOption = 1;
						let html= `

							    <div class="row">
							    	<div style="margin-top:35px;text-align:center;font-size:22px;">Quick Select</div>
							    	<div id="myprogram" style="text-align:center;font-size:17px;margin-bottom:30px;"></div>


							    	<center><a onclick="component.setupComplete();" class="waves-effect waves-light btn" style="width:50%;">I'm Done!</a></center>
							        <div class="col s12 tophead" style="font-size:15px;margin-top:15px;">
							          View Courses by Year:
							        </div>

										<div class="center-align col s6" style="font-size:14px;font-weight:300;background-color:#e57373;border-radius:2px;height:45px;margin-left:25%;margin-right:33.33%;">
											    <select id="viewCourseYear" style="color:#fff;" required onchange="component.displayQuickSelectCourses();">


											    </select>
										</div>

								</div>
								<hr>
							  <div class="col s12 tophead" id="peekProgYear" style="margin-top:20px;">
							          1st Year Courses
							  </div>



							   <div class="col s12 midhead">
							          1st Trimester
							  </div>

							  <div class="row" style="margin-bottom:36px;">

							  	 <ul id="listOfCourses" sytle="border:none;" class="collapsible" data-collapsible="accordion">
							      	

							  	 </ul>

							   	</div>
							</div>

						`;

						component.reRender2(html, '#app');
						component.countCourseYear();
						component.displayQuickSelectCourses();
		}

		chooseViewProgram(){

			let html =`   
							  	<nav>
									<div class="nav-wrapper">
										<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:14px;">Programs</span></a>
										<a href="#" data-activates="programs-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
										<a onclick="component.studentDashboard(), component.listHomeSched();" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

										<ul class="side-nav" id="programs-Nav">
											<div class="side-header row">
												<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
											</div>

											<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
										</ul>
									</div>
								</nav>
						<div class="row center" style="position:relative;top:0;font-size:20px;height:7%;margin:0;"><div style="position:relative;top:25%;font-size:16px;">Tap to view</div></div>

							<div id="manageProgramList" class="collection row " style="border:0;width:84%;margin-left:8%;margin-right:8%;">



							</div>

						<div class="fixed-action-btn">
							<a onclick="component.addProgamPage()" class="btn-floating btn-large red">
								<i class="fa fa-plus" aria-hidden="true"></i>
							</a>
						</div>	
			`;
			this.reRender2(html, '#app');
			component.populateProgram();

		}

		viewOtherCourses(y){
			let backOption = 2;
			let x=y;
			console.log(x);
						let html= `
							    <nav>
							    <div class="nav-wrapper ">
							      <a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Programs</span></a>
							      <a href="#" data-activates="mobile-demo" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
							      <a onclick="component.chooseViewProgram()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-reply" aria-hidden="true"></i></a>


							      <ul class="right hide-on-med-and-down">
							        		<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Overview</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>View Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
								  </ul>

							      <ul class="side-nav" id="mobile-demo">
							            <div class="side-header row">

							                <div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>

							            </div>
							       		    <li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Overview</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>View Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Policies</a></li>
											<li><a href="#" onclick="component.settings(), $('.button-collapse').sideNav('hide');""><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
								</ul>
							    </div>
							  </nav>

							    <div class="row">

							    	<div id="myprogram" style="margin-top:35px;text-align:center;font-size:23px;"></div>
							        <br>

							        <div class="col s12 tophead" style="font-size:15px;">
							          View Courses by Year:
							        </div>



										<div class="center-align col s6" style="font-size:14px;font-weight:300;background-color:#e57373;border-radius:2px;height:45px;margin-left:25%;margin-right:33.33%;">
											    <select id="viewCourseYear" style="color:#fff;" required onchange="component.displayOtherCourses(${x}, ${backOption});">


											    </select>
										</div>

								</div>

							  <div class="col s12 tophead" id="peekProgYear">
							          1st Year Courses
							  </div>



							   <div class="col s12 midhead">
							          1st Trimester
							  </div>

							  <div class="row" style="margin-bottom:36px;">

							  	 <ul id="peekListOfCourses" sytle="border:none;" class="collapsible" data-collapsible="accordion">
							      	

							  	 </ul>

							   	</div>
							</div>

						`;
						component.reRender2(html, '#app');
						component.countPreviewCourseYear(x);
						// component.displayOtherCourses();
		}
		viewMyCourses(y){
			let backOption = 1;
			console.log(y);
						let html= `

							    <nav>
							    <div class="nav-wrapper ">
							      <a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Programs</span></a>
							      <a href="#" data-activates="mobile-demo" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
							      <a onclick="component.myProfile()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-reply" aria-hidden="true"></i></a>


							      <ul class="right hide-on-med-and-down">
							        		<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Overview</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>View Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
								  </ul>

							      <ul class="side-nav" id="mobile-demo">
							            <div class="side-header row">

							                <div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>

							            </div>
							       		    <li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Overview</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>View Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Policies</a></li>
											<li><a href="#" onclick="component.settings(), $('.button-collapse').sideNav('hide');""><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
								</ul>
							    </div>
							  </nav>

							    <div class="row">

							    	<div id="myprogram" style="margin-top:35px;text-align:center;font-size:23px;"></div>
							        <br>

							        <div class="col s12 tophead" style="font-size:15px;">
							          View Courses by Year:
							        </div>



										<div class="center-align col s6" style="font-size:14px;font-weight:300;background-color:#e57373;border-radius:2px;height:45px;margin-left:25%;margin-right:33.33%;">
											    <select id="viewCourseYear" style="color:#fff;" required onchange="component.displayMyCourses(${y}, ${backOption});">


											    </select>
										</div>

								</div>

							  <div class="col s12 tophead" id="peekProgYear">
							          1st Year Courses
							  </div>



							   <div class="col s12 midhead">
							          1st Trimester
							  </div>

							  <div class="row" style="margin-bottom:36px;">

							  	 <ul id="peekListOfCourses" sytle="border:none;" class="collapsible" data-collapsible="accordion">
							      	

							  	 </ul>

							   	</div>
							</div>

						`;

						component.reRender2(html, '#app');
						component.countCourseYear();
						component.displayMyCourses(backOption);
		}		

		myProfile(){

			//for indexedDB
			let request = indexedDB.open('opcoursedata', 1);
			request.onsuccess = function(e){
				let db = e.target.result;
				let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
				let requestRead = objectStore.get(1);
				
				requestRead.onsuccess = function(e){
					let data = event.target.result;
						let html = `			
							<div class="row header2" style="height:45%;margin-bottom:0;">
									<nav>
										<div class="nav-wrapper">
											<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:14px;">Summary</span></a>
											<a href="#" data-activates="mobile-demo" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
											<a onclick="component.studentDashboard(), component.listHomeSched()" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

											<ul class="right hide-on-med-and-down">
												<li><a href="sass.html" class="btn-flat disabled">Sass</a></li>
												<li><a href="badges.html">Components</a></li>
												<li><a href="collapsible.html">Javascript</a></li>
												<li><a href="mobile.html">Mobile</a></li>
											</ul>

											<ul class="side-nav" id="mobile-demo">
												<div class="side-header row">
													<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
												</div>

												<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
												<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
												<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
												<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
												<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
												<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
											
											</ul>
										</div>
									</nav>

									<div class="row" id="summaryHeader" style="text-align:center;position:relative:0;height:100%;">

										<div class="col s12" style="color:#000;margin-top:-20px;">
												<div style="margin-top:12%;">
													<img style="width:80px;height:80px;border-radius:50%;border: 5px solid #fff;" src="img/disgusted cat.jpg"/>
												</div>
												<div id="progressContainer" class="center-align" style="width:60%;margin-left:20%;margin-right:20%;background-color:#bdbdbd;border-radius:5px;margin-top:3%;">
													<div style="height:20px;width:1%;background-color:#8bc34a;font-size:12px;line-height:20px;border-radius:5px;text-align: center;" id="progressPercent">

													</div>
												</div>
												<div style="font-size:16px;color:#fff;margin-top:4%;">
													${data.program}
												</div>

												<!--
												<div class="row" style="margin:0;">
													<div class="col s6 textDescript" style="height:60px;padding-top:4px;width:40%;text-align:right;"><i class="fa fa-clock-o" aria-hidden="true" style="color:#e57373;font-size:30px;"></i></div>
													
												
													<div class="col s6 textDescript" style="padding:0;text-align:left;">
														<span style="font-size:13px;font-weight:500;color:#fff;">Estimated Time</span>
														<br>
														<span id="timeRemaining" style="font-size:11px;font-weight:400;color:#fff;"></span>

													</div>
												-->
												</div>



										</div>
									</div>
							</div>

						<div style="min-height:55%;background-color:#ee6e73;position:relative;">
							<div class="col s12 center" style="background-color:#fff;height:50px;padding-top:15px;">
									<a onclick="component.viewMyCourses()" style="color:#e57373;text-align:center;">View My Courses</a>
							</div>

											<div id="test1" class="col s12 container">

														<div class="row" style="margin:0;">
															<div class="col s4 center-align textDescript" style="height:40px;padding-top:12px;margin-left:25px; margin-top:20px;margin-right:10px;;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-list" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s8 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Total Courses</span>
																<br>
																<span id="totalCourses" style="font-size:10px;font-weight:400;color:#000;"></span>

															</div>
														</div>
														<hr>

														<div class="row" style="margin:0;">
															<div class="col s4 center-align textDescript" style="height:40px;padding-top:12px;margin-left:25px; margin-top:20px;margin-right:10px;;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-graduation-cap" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s8 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Completed Courses</span>
																<br>
																<span id="completedCourses" style="font-size:10px;font-weight:400;color:#000;"></span>

															</div>
														</div>
														<hr>

														<div class="row" style="margin:0;">
															<div class="col s4 center-align textDescript" style="height:40px;padding-top:12px;margin-left:25px; margin-top:20px;margin-right:10px;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-graduation-cap" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s8 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Not Yet Taken</span>
																<br>
																<span id="courseNottaken" style="font-size:10px;font-weight:400;color:#000;"></span>

															</div>
														</div>
														<hr>

														<div class="row" style="margin:0;">
															<div class="col s4 center-align textDescript" style="height:40px;padding-top:12px;margin-left:25px; margin-top:20px;margin-right:10px;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-hourglass-end" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s8 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Courses in progress</span>
																<br>
																<span id="inprogressCourses" style="font-size:10px;font-weight:400;color:#000;"></span>
															</div>
															
														</div>

											</div>



								</div>
							
						</div>
					`;


					component.reRender2(html, '#app');
					component.computeSummary();
					// component.computeTimeRemaining();
					let progress = document.getElementById('progressPercent').innerHTML;
					// console.log(progress);
					// component.progressBar();

				}	
				requestRead.onerror = function(e){
					console.log("Unable to get data!");
				}
				
			}			
			request.onerror = function(e){
				console.log("Unable to open database!");
			}

		}

		singleCoursePage(progIndex, buttonID, option){
			let backOption = option;
			console.log(option);
			if(option ==undefined){
				backOption=1;
			}
			let userProgPreview ="";
			let userPcode ="";
			let courses = [];

			//IndexedDB section
			let request = indexedDB.open('opcoursedata', 1);

				request.onsuccess = function(e){
					let db = e.target.result;
					let objectStore = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
					let requestGET = objectStore.get(1);

						requestGET.onsuccess = function(e){
							let data = event.target.result;
							userPcode = data.pcode;
							userProgPreview =data.progpreview;
						}
						requestGET.onerror = function(e){

						}
						requestGET.oncomplete = function(e){

						}

						objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
						let requestGETCOURSES = objectStore.get(1);

						requestGETCOURSES.onsuccess = function(e){
						let data = event.target.result;
						courses = data;
							console.log(buttonID);
							let y=buttonID.id;
							let grade=0;
							let courseyear = courses[y].year;
							let coursetri = courses[y].sem;
							let yearf = "";
							let trif= "";
							if(courseyear==1){
								yearf="1st Year";
							}
							else if (courseyear==2){
								yearf="2nd Year";
							}
							else if (courseyear==3){
								yearf="3rd Year";
							}
							if(coursetri==1){
								trif="1st Trimester";
							}
							else if (coursetri==2){
								yearf="2nd Trimester";
							}
							else if (coursetri==3){
								yearf="3rd Trimester";
							}

							let html = `			
												<nav>
													<div class="nav-wrapper" id="goUp">
														<a href="#!"  class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Course</span></a>
														<a href="#" data-activates="mobile-demo" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>

														<a onclick="component.previousPageCheck(${progIndex}, ${backOption})" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;height:27px;"  class="fa fa-reply" aria-hidden="true"></i></a>


														<ul class="right hide-on-med-and-down">
															<li><a href="sass.html" class="btn-flat disabled">Sass</a></li>
															<li><a href="badges.html">Components</a></li>
															<li><a href="collapsible.html">Javascript</a></li>
															<li><a href="mobile.html">Mobile</a></li>
														</ul>

														<ul class="side-nav" id="mobile-demo">
															<div class="side-header row">
																<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
															</div>

															<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Overview</a></li>
															<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>View Programs</a></li>
															<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');""><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
															<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Guide</a></li>
															<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>Settings</a></li>
															<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
														</ul>
													</div>
												</nav>
											<div class="row" id="pageInfo" style="height:200px;background-color:#80cbc4;margin:0;">


													`;

												if (courses[y].stat=="INPROGRESS"){
														html +=`
															<div class="circle" id="indicateCourseInprogress" style="text-align:center;padding-left:15px;margin-top:20px;margin-right:31.33%;margin-left:35.33%;display:inline-block;">
																	<center style="font-weight:500;color:#fff;margin-top:17px;margin-left:-8px;">In <br>Progress</center>
															</div>
															`;
													}
												else if (courses[y].stat=="COMPLETE"){
													html +=`
															<div class="circle" id="indicateCourseComplete" style="text-align:center;padding-left:15px;margin-top:20px;margin-right:31.33%;margin-left:35.33%;display:inline-block;">
																	<center style="font-weight:500;color:#fff;margin-top:33px;margin-left:-11px;">Complete</center>
															</div>
															`;
													}
												else if (courses[y].stat=="NOT TAKEN")
													html +=`
															<div class="circle" id="indicateCourseDefault" style="text-align:center;padding-left:15px;margin-top:20px;margin-right:31.33%;margin-left:35.33%;display:inline-block;">
																	<center style="font-weight:500;color:#fff;margin-top:23px;margin-left:-13px;">Not<br>Taken</center>
															</div>
															`;

											html+=`
													<div class="col s12" style="color:#212121;font-size:20px;margin-top:10px;text-align:center;">
															${courses[y].idc}</br>
													</div>


													<!-- Delete Confirmation Modal Structure -->
														<div style="padding:0px;" id="deleteConfirm" class="modal">
															<div class="modal-content">
																<span style="font-size:26px;">Confirm Delete</span>
																<p>Are you sure you want to delete this course?</p>
															</div>
															<div class="row modal-footer center-align">
																<a href="#!" id="${y}" onclick="component.deleteCourse(${y})" style="color:#000" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
																<a href="#!"  class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
															</div>
														</div>

													<!-- Inprogress Confirmation Modal Structure -->
															<div style="padding:0px;" id="modal2" class="modal">
																<div class="modal-content">
																	<span style="font-size:26px;">Confirm</span>
																	<p>Change status of this course to in progress?</p>
																</div>
																<div class="row modal-footer center-align">
																	<a href="#pageInfo" id="${y}" onclick="component.moveInprogress(${y}), component.singleCoursePage(${y}, this);" style="color:#000" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
																	<a href="#!"  class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
																</div>
															</div>
													<!-- Completed Confirmation Modal Structure -->
															<div style="padding:0px;" id="modal3" class="modal">
																<div  class="modal-content">
																	<span style="font-size:26px;">Confirm</span>
																	<p>Change status of this course to completed?</p>
																</div>
																<div class="row modal-footer center-align">
																	<a href="#pageInfo" id="${y}" onclick="component.moveComplete(${y}), component.singleCoursePage(${y}, this);" style="color:#000" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
																	<a href="#!" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
																</div>
															</div>
													<!-- Default Confirmation Modal Structure -->
															<div style="padding:0px;" id="modal4" class="modal">
																<div class="modal-content">
																	<span style="font-size:26px;">Confirm</span>
																	<p>Change status of this course to not taken?</p>
																</div>
																<div class="row modal-footer center-align">
																	<a href="#pageInfo" id="${y}" onclick="component.moveDefault(${y}), component.singleCoursePage(${y}, this);" style="color:#000" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
																	<a href="#!" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
																</div>
															</div>
													<!-- Add Schedule Modal Structure -->
															<div style="padding:0px;" id="modal5" class="modal">
																<div class="modal-content">
																	<span style="font-size:26px;">Add a Schedule</span>
																	<input type="text" class="timepicker">
																</div>
																<div class="row modal-footer center-align">
																	<a href="#pageInfo" onclick="" style="color:#000" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
																	<a href="#!" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
																</div>
															</div>

													<!-- Add Grade Modal Structure -->
															<div style="padding:0px;" id="modal6" class="modal modal-fixed-footer">
															<div class="row navbar-fixed" style="position:fixed;text-align:center;background-color:#fafafa;width:100%;padding-top:20px;height:80px;">
																		<span style="font-size:26px;">Choose Grade</span>
																		<br><br>
																		<hr>
															</div>

																<div class="modal-content" style="margin-top:50px;">
																	
									
																			    <p>
																			      <input name="group1" type="radio" value="A+" id="test1" />
																			      <label for="test1">A+</label>
																			    </p>
																			    <p>
																			      <input name="group1" type="radio" value="A" id="test2" />
																			      <label for="test2">A</label>
																			    </p>
																			     <p>
																			      <input name="group1" type="radio" value="A-" id="test3" />
																			      <label for="test3">A-</label>
																			    </p>
																			     <p>
																			      <input name="group1" type="radio" value="B+" id="test4" />
																			      <label for="test4">B+</label>
																			    </p>
																			     <p>
																			      <input name="group1" type="radio" value="B" id="test5" />
																			      <label for="test5">B</label>
																			    </p>
																			     <p>
																			      <input name="group1" type="radio" value="B-" id="test6" />
																			      <label for="test6">B-</label>
																			    </p>
																			     <p>
																			      <input name="group1" type="radio" value="C+" id="test7" />
																			      <label for="test7">C+</label>
																			    </p>
																			     <p>
																			      <input name="group1" type="radio" value="C" id="test8" />
																			      <label for="test8">C</label>
																			    </p>
																			     <p>
																			      <input name="group1" type="radio" value="C-" id="test9" />
																			      <label for="test9">C-</label>
																			    </p>
																			    <p>
																			      <input name="group1" type="radio" value="IC" id="test10" />
																			      <label for="test10">IC</label>
																			    </p>
																			    <br>
																</div>

																<div class="row modal-footer center-align" style="margin-bottom:0;">
																	<a href="#!" onclick="component.addGrade(${y})" style="color:#000" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Confirm</a>
																<a href="#!" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
																</div> 
														
															</div>


												<div class="col s2 offset-s10" style="margin-top:-30px;padding-left:25px;padding-right:25px;padding-bottom:10px;">
									
											<!-- Restriction option button  
												if (userProgPreview == userPcode){
											-->
												
													<!-- Modal Trigger -->
													  <a style="height:50px;border-radius:50%;" class="modal-trigger pulse" href="#modal1"><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i></a>
													  `;
												

									html+=`
					
												<!-- Option Modal Structure -->
													  <div id="modal1" style="padding-top:15px;padding-bottom:15px;z-index:1004;border-radius: 10px 10px 0 0;" class="modal bottom-sheet">
													    <div style="padding:0;" class="modal-content">
													      <div class="row">
													     	 <span style="font-size:15px;" class="col s9">Change To:</span>
													    	</div>
													   	  </div>
													 	`;

									if(courses[y].stat=="INPROGRESS"){
											html+=`
													      <div class="row" style="margin-bottom:10px;">
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color: #bcbcbc;" class="" href="#!"><i style="font-size:20px;" class="fa fa-hourglass-half" aria-hidden="true"></i></a>
													      			<br>
													      			<p style="font-size:12px;color:#bcbcbc;">Inprogress</p>

													      		</div>

													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" class="modal-trigger modal-action modal-close" href="#modal3"><i style="font-size:20px;" class="fa fa-check" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#000;">Completed</p>

													      		</div>
													      			
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" class="modal-trigger modal-action modal-close" href="#modal4"><i style="font-size:20px;" class="fa fa-book" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#000;">Default</p>

													      		</div>
													      </div>
													      <hr>
													      <div class="row" style="margin-top:15px;margin-bottom:10px;">
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" class="modal-close" onclick="component.courseAddTime(${y});" href="#"><i style="font-size:20px;" class="fa fa-clock-o" aria-hidden="true"></i></a>
													      			<br>
													      			<p style="font-size:12px;color:#000;">Schedule</p>

													      		</div>

													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#bcbcbc;" class="" href="#!"><i style="font-size:20px;" class="fa fa-archive" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#bcbcbc;">Grade</p>

													      		</div>
													      			
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" href="#deleteConfirm" class="modal-trigger modal-action modal-close"><i style="font-size:20px;" class="fa fa-trash" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:red;">Delete</p>
													      		</div>
													      </div>


												`;}
									else if(courses[y].stat=="COMPLETE"){
											html+=`
													      <div class="row" style="margin-top:25px;">
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000" class="modal-trigger modal-action modal-close" href="#modal2"><i style="font-size:20px;" class="fa fa-hourglass-half" aria-hidden="true"></i></a>
													      			<br>
													      			<p style="font-size:12px;color:#000">Inprogress</p>

													      		</div>

													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#bcbcbc;" class="" href="#!"><i style="font-size:20px;" class="fa fa-check" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#bcbcbc">Completed</p>

													      		</div>
													      			
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" class="modal-trigger modal-action modal-close" href="#modal4"><i style="font-size:20px;" class="fa fa-book" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#000;">Default</p>

													      		</div>
													      </div>
													      <hr>
													      <div class="row" style="margin-top:15px;margin-bottom:10px;">
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color: #bcbcbc;" class="" href="#!"><i style="font-size:20px;" class="fa fa-clock-o" aria-hidden="true"></i></a>
													      			<br>
													      			<p style="font-size:12px;color:#bcbcbc;">Schedule</p>

													      		</div>

													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" class="modal-trigger modal-action modal-close" href="#modal6"><i style="font-size:20px;" class="fa fa-archive" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#000;">Grade</p>

													      		</div>
													      			
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" href="#deleteConfirm"  class="modal-trigger modal-action modal-close"><i style="font-size:20px;" class="fa fa-trash" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:red;">Delete</p>
													      		</div>
													      </div>

												`;}
									else if(courses[y].stat=="NOT TAKEN"){
											html+=`
													      <div class="row" style="margin-top:25px;">
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" class="modal-trigger modal-action modal-close" href="#modal2"><i style="font-size:20px;" class="fa fa-hourglass-half" aria-hidden="true"></i></a>
													      			<br>
													      			<p style="font-size:12px;color:#000;">Inprogress</p>

													      		</div>

													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" class="modal-trigger modal-action modal-close" href="#modal3"><i style="font-size:20px;" class="fa fa-check" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#000;">Completed</p>

													      		</div>
													      			
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#bcbcbc;" class="" href="#!"><i style="font-size:20px;" class="fa fa-book" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#bcbcbc">Default</p>

													      		</div>
													      </div>

													      <hr>
													      <div class="row" style="margin-top:15px;margin-bottom:10px;">
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color: #bcbcbc;" class="" href="#!"><i style="font-size:20px;" class="fa fa-clock-o" aria-hidden="true"></i></a>
													      			<br>
													      			<p style="font-size:12px;color:#bcbcbc;">Schedule</p>

													      		</div>

													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#bcbcbc;" class="" href="#!"><i style="font-size:20px;" class="fa fa-archive" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:#bcbcbc;">Grade</p>

													      		</div>
													      			
													      		<div class="col s4 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" href="#deleteConfirm" class="modal-trigger modal-action modal-close"><i style="font-size:20px;" class="fa fa-trash" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:red;">Delete</p>
													      		</div>
													      </div>

												`;}

											html+=`	
													    </div>
													  </div>


												</div>
										</div>


										<div class="row" style="background-color:#e57373;margin:0;">
											<div class="col s12" style="background-color:#fff;height:50px;margin-top:-7px;">
												<center style="color:#e57373;padding-top:15px;padding-bottom:15px;">Course Details</center>

											</div>

											<div id="test1" class="col s12">

														<div class="row" style="margin:0;">
															<div class="col s3 center-align textDescript" style="height:40px;padding-top:12px;margin-left:15px; margin-top:20px;margin-right:10px;;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-calendar" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s9 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Regular Schedule</span>
																<br>
																<span style="font-size:10px;font-weight:400;color:#efefef;">${yearf}, ${trif}</span>

															</div>
														</div>
														<hr>

														<div class="row" style="margin:0;">
															<div class="col s3 center-align textDescript" style="height:40px;padding-top:12px;margin-left:15px; margin-top:20px;margin-right:10px;;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-graduation-cap" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s9 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Course Code</span>
																<br>
																<span style="font-size:10px;font-weight:400;color:#efefef;">${courses[y].idc}</span>

															</div>
														</div>
														<hr>

														<div class="row" style="margin:0;">
															<div class="col s4 center-align textDescript" style="height:40px;padding-top:12px;margin-left:15px; margin-top:20px;margin-right:10px;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-graduation-cap" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s8 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Course Description</span>
																<br>
																<span style="font-size:10px;font-weight:400;color:#efefef;">${courses[y].des}</span>

															</div>
														</div>
														<hr>

														<div class="row" style="margin:0;">
															<div class="col s4 center-align textDescript" style="height:40px;padding-top:12px;margin-left:15px; margin-top:20px;margin-right:10px;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-hourglass-end" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s8 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Course Units</span>
																<br>
																<span style="font-size:10px;font-weight:400;color:#efefef;">${courses[y].unit}</span>
															</div>
															
														</div>
														<hr>

														<div class="row" style="margin:0;">
															<div class="col s4 center-align textDescript" style="height:40px;padding-top:12px;margin-left:15px; margin-top:20px;margin-right:10px;;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-check-circle" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s8 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Prerequisite</span>
																<br>
																<span style="font-size:10px;font-weight:400;color:#efefef;">${courses[y].prerequisite}</span>

															</div>		
														</div>
														<hr>

														<div id="singleCourseStat" class="row" style="margin-bottom:41px;">
															<div class="col s4 center-align textDescript" style="height:40px;padding-top:12px;margin-left:15px; margin-top:20px;margin-right:10px;width:40px;padding-bottom:20px;border-radius:50%;background-color:#fff;"><i class="fa fa-tasks" aria-hidden="true" style="color:#e57373;"></i></div>
															<div class="col s8 textDescript" style="padding:0;padding-top:20px;padding-bottom:20px;padding-left:20px;margin-left:5px;">
																<span style="font-size:12px;font-weight:500;">Status</span>
																<br>
																<span style="font-size:10px;font-weight:400;color:#efefef;">${courses[y].stat}</span>
															</div>	
														</div>

											</div>

										</div>

								`;
								component.reRender2(html, '#app');
					}//requestGETCOURSES.onsuccess closing brace
					requestGETCOURSES.onerror = function(e){

					}
					requestGETCOURSES.oncomplete = function(e){

					}
			}//requestOpen.onsuccess closing brace

		}

		courseAddTime(index){
			let y=index;
			let html = `
			<nav>
				<div class="nav-wrapper">
					<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Add Schedule</span></a>
					<a href="#" data-activates="settings-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
					<a id="${y}" onclick="component.singleCoursePage(${y}, this);" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-reply" aria-hidden="true"></i></a>

					<ul class="side-nav" id="settings-Nav">
						<div class="side-header row">
							<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
						</div>

											<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
					</ul>
				</div>
			</nav>
			 <p style="margin-bottom:0;">Mondays 	<input style="width:70%;margin-right:15%;margin-left:15%;background-color:#fff;" id="monday" type="text" class="timepicker"></p>
			 <p style="margin-bottom:0;">Tuesdays 	<input style="width:70%;margin-right:15%;margin-left:15%;background-color:#fff;" id="tuesday" type="text" class="timepicker"></p>
			 <p style="margin-bottom:0;">Wednesdays <input style="width:70%;margin-right:15%;margin-left:15%;background-color:#fff;" id="wednesday" type="text" class="timepicker"></p>
			 <p style="margin-bottom:0;">Thursdays  <input style="width:70%;margin-right:15%;margin-left:15%;background-color:#fff;" id="thursday" type="text" class="timepicker"></p>
			 <p style="margin-bottom:0;">Fridays 	  <input style="width:70%;margin-right:15%;margin-left:15%;background-color:#fff;" id="friday" type="text" class="timepicker"></p>
			 <p style="margin-bottom:0;">Saturdays  <input style="width:70%;margin-right:15%;margin-left:15%;background-color:#fff;" id="saturday" type="text" class="timepicker"></p>
			 <p style="margin-bottom:0;">Sundays  <input style="width:70%;margin-right:15%;margin-left:15%;background-color:#fff;" id="sunday" type="text" class="timepicker"></p>

			<a class="waves-effect waves-light btn" onclick="component.saveCourseTime(${y})">Save</a>

			`;

			this.reRender2(html, '#app');
		}

		schoolReference(){
			let html = `
			<nav>
				<div class="nav-wrapper">
					<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Guide</span></a>
					<a href="#" data-activates="home-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
					<a onclick="component.studentDashboard(), component.listHomeSched()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

					<ul class="side-nav" id="home-Nav">
						<div class="side-header row">
							<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
						</div>


											<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
					</ul>
				</div>
			</nav>

				<div class="container">
									
						<div class="row center" style="position:relative;top:0;font-size:20px;height:30%;">
								<div style="position:relative;top:45%;">
									App Guide & School Reference
								</div>
						</div>


						<ul class="collapsible" data-collapsible="accordion" style="box-shadow:none;border:none;background-color:transparent;">

							    <li style="background-color:none;border:0;">
							      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-question-circle"></i>Trimestral or Semestral</div>
							      <div style="background-color:none;border:none;" class="collapsible-body">
							      	<div style="margin:0 45px 25px 45px;font-size:13px;">
							      		There are two teaching systems known to every schools or universities, Trimestral and Semestral.<br><br>
							      		The two system varies on the number of terms (trimester or semester) held per year. A school or program with Trimestral system has 3 trimester per year and each trimester has 3 months of class.
							      		The Semestral system has 2 semesters per year and has around 4 months per semester. 

							      	</div>
							      </div>
							    </li>

							    <li style="background-color:transparent;border:0;">
							      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-question-circle"></i>Program</div>
							      <div style="background-color:none;border:none;" class="collapsible-body">
							      	<div style="margin:0 45px 25px 45px;font-size:13px;">
							      		Here you can save your data and also retrieve data from the cloud server. This will help you transfer or use your data to another mobile device with OPcourse app. This feature requires internet connection.
							      	</div>
							      </div>
							    </li>

							    <li style="background-color:transparent;border:0;">
							      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-question-circle"></i>Courses</div>
							      <div style="background-color:none;border:none;" class="collapsible-body">
							      	<div style="margin:0 45px 25px 45px;font-size:13px;">
							      		Here you can save your data and also retrieve data from the cloud server. This will help you transfer or use your data to another mobile device with OPcourse app. This feature requires internet connection.
							      	</div>
							      </div>
							    </li>

							     <li style="background-color:transparent;border:0;">
							      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-question-circle"></i>Schedules</div>
							      <div style="background-color:none;border:none;" class="collapsible-body">
							      	<div style="margin:0 45px 25px 45px;font-size:13px;">
							      		Here you can save your data and also retrieve data from the cloud server. This will help you transfer or use your data to another mobile device with OPcourse app. This feature requires internet connection.
							      	</div>
							      </div>
							    </li>

							     <li style="background-color:transparent;border:0;">
							      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-question-circle"></i>Password</div>
							      <div style="background-color:none;border:none;" class="collapsible-body">
							      	<div style="margin:0 45px 25px 45px;font-size:13px;">
							      		Here you can save your data and also retrieve data from the cloud server. This will help you transfer or use your data to another mobile device with OPcourse app. This feature requires internet connection.
							      	</div>
							      </div>
							    </li>

							     <li style="background-color:transparent;border:0;">
							      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-question-circle"></i>Grading System</div>
							      <div style="background-color:none;border:none;" class="collapsible-body">
							      	<div style="margin:0 25px 25px 25px;font-size:13px;">
												<table class="centered" style="border-radius:10px;background-color:#e57373;margin-bottom:25px;">
													  <tr class="row">
													    <th style="padding:10px;text-align:center;" class="col s4">Grade Range</th>
													    <th style="padding:10px" style="padding:10px" class="col s4">Grade Point</th>
													    <th style="padding:10px" class="col s4">Grade Input</th>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">96-100</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">1.00</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">A+</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">91-95</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">1.25</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">A</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">86-90</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">1.50</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">A-</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">81-85</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">1.75</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">B+</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">75-80</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">2.00</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">B</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">69-74</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">2.25</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">B-</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">63-68</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">2.50</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">C+</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">57-62</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">2.75</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">C</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">50-56</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">3.00</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">C-</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s4">50 Below</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">5.00</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">F</td>
													  </tr>
													  <tr class="row center-align" >
													    <td style="padding:10px;font-size:12px;" class="col s4"></td>
													    <td style="padding:10px;font-size:12px;" class="col s4">Incomplete</td>
													    <td style="padding:10px;font-size:12px;" class="col s4">IC</td>
													  </tr>
												</table>

												<table class="centered" style="border-radius:10px;background-color:#e57373;margin-bottom:25px;">
													  <tr class="row">
													    <th style="padding:10px;text-align:center;" class="col s12">Trimestral Grade System</th>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Prelim</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">30%</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Midterm</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">30%</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Final Grade</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">40%</td>
													  </tr>
													  <tr class="row center-align">
													    <td style="padding:10px;font-size:12px;" class="col s6">Overall</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">100%</td>
													  </tr>
												</table>

												
												<table class="centered" style="border-radius:10px;background-color:#e57373;margin-bottom:25px;">
													  <tr class="row">
													    <th style="padding:10px;text-align:center;" class="col s12">Grade for each term period</th>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Quizzes</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">40%</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Class Participation</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">10%</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Major Exam</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">50%</td>
													  </tr>
													  <tr class="row center-align">
													    <td style="padding:10px;font-size:12px;" class="col s6">Overall</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">100%</td>
													  </tr>
												</table>

												<table class="centered" style="border-radius:10px;background-color:#e57373;margin-bottom:25px;">
													  <tr class="row">
													    <th style="padding:10px;text-align:center;" class="col s12">Grade for for Lec and Lab</th>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Quizzes (Lec)/ Experiments (Lab)</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">40%</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Class Participation</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">10%</td>
													  </tr>
													  <tr class="row center-align" style="border:1px solid #fff;border-left:0;border-right:0;background-color:#ef9a9a;">
													    <td style="padding:10px;font-size:12px;" class="col s6">Major Exam</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">50%</td>
													  </tr>
													  <tr class="row center-align">
													    <td style="padding:10px;font-size:12px;" class="col s6">Lec or Lab Grade</td>
													    <td style="padding:10px;font-size:12px;" class="col s6">100%</td>
													  </tr>
												</table>
							      	</div>
							      </div>
							    </li>   
						</ul>


			</div>

			`;
			this.reRender2(html, '#app');

		}

		settings(){

			let request = indexedDB.open('opcoursedata', 1);
			let db="";

			request.onsuccess = function(e){
				db = e.target.result;

					let transaction = db.transaction(['userInfo'], "readwrite");
					let objectStore = transaction.objectStore('userInfo');
					let requestGet = objectStore.get(1);

						requestGet.onsuccess = function(e){
							let data = event.target.result;
							let notify = data.localNotif;
							let passCheck = data.userPassword;
							if(notify === true){
								notify = "On";
							}
							else if(notify===false){
								notify="Off";
							}
							if(passCheck === true){
								passCheck = "On";
							}
							else if(passCheck===false){
								passCheck="Off";
							}



								let html= `
								<div class="row">
									<nav>
										<div class="nav-wrapper">
											<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Settings</span></a>
											<a href="#" data-activates="home-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
											<a onclick="component.studentDashboard()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

											<ul class="side-nav" id="home-Nav">
												<div class="side-header row">
													<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
												</div>

											<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
											</ul>
										</div>
									</nav>

									<div class="row center" style="position:relative;top:20px;font-size:20px;">User Preferences</div>

									<br>


									<div class="row" style="margin-bottom:0;">
											<div class="col s5" style="height:70px;padding:20px 10px 20px 25px;font-size:13px;"><i style="font-size:14px;margin-right:10px;" class="fa fa-graduation-cap" aria-hidden="true"></i>My Program</div>
											<div id="userProgram" class="col s7 right-align" style="height:70px;padding:20px 40px 20px 25px;font-size:13px;">${data.program}</div>
									</div>

									<hr>

									<div class="row" style="margin-bottom:0;">
											<div class="col s5" style="height:70px;padding:20px 10px 20px 25px;font-size:13px;"><i style="font-size:14px;margin-right:10px;" class="fa fa-bell" aria-hidden="true"></i>Notification</div>
											<div id="userNotify" class="col s7 right-align" style="height:70px;padding:20px 40px 20px 25px;font-size:13px;">${notify}</div>
									</div>
									<hr>
									<div class="row" style="margin-top:0px;margin-bottom:0;">
											<div class="col s5" style="height:70px;padding:20px 10px 20px 25px;font-size:13px;"><i style="font-size:14px;margin-right:10px;" class="fa fa-cloud-upload" aria-hidden="true"></i>Last BackupID</div>
											<div id="" class="col s7 right-align" style="height:70px;padding:20px 40px 20px 25px;font-size:13px;">${data.backupID}</div>
									</div>

									<hr>
									<div class="row" style="margin-top:0px;margin-bottom:0;">
											<div class="col s5" style="height:70px;padding:20px 10px 20px 25px;font-size:13px;"><i style="font-size:14px;margin-right:10px;" class="fa fa-cloud-upload" aria-hidden="true"></i>Backup Password</div>
											<div id="" class="col s7 right-align" style="height:70px;padding:20px 40px 20px 25px;font-size:13px;">${data.backupPassword}</div>
									</div>

									<hr>

									<div class="row" style="margin-top:0px;">
											<div class="col s5" style="height:70px;padding:20px 10px 20px 25px;font-size:13px;"><i style="font-size:16px;margin-right:10px;" class="fa fa-lock" aria-hidden="true"></i>Password</div>
											<div id="passwordCheck" class="col s7 right-align" style="height:70px;padding:20px 40px 20px 25px;font-size:13px;">${passCheck}</div>
									</div>
							</div>


								<!--Choose Course Modal Popup -->
									<div style="padding:0px;" id="programModal" class="modal modal-fixed-footer">
										<div class="row navbar-fixed" style="position:fixed;text-align:center;background-color:#fafafa;width:100%;padding-top:20px;height:80px;">
											<span style="font-size:26px;">Choose Program</span>
											<br><br>
											<hr>
										</div>

										<div id="programOptions" class="modal-content" style="margin-top:50px;">


										</div>

										<div class="row modal-footer center-align" style="margin-bottom:0;">
											<a href="#!" onclick="component.transferCourseSetting()" style="color:#000" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Confirm</a>
											<a href="#!" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
										</div> 

									</div>

									<div class="fixed-action-btn" id="editSettingBtn">
										<a onclick="component.updateSettings()" class="btn-floating btn-large red">
											<i style="font-size:16px;margin-left:1px;" class="fa fa-edit" aria-hidden="true"></i>
										</a>
									</div>

									<div class="fixed-action-btn" id="saveSettingBtn" style="display:none;">
										<a onclick="component.saveSettings()" class="btn-floating btn-large" style="background-color:#8bc34a;">
											<i class="fa fa-check" aria-hidden="true"></i>
										</a>
									</div>

									`;
									component.reRender2(html, '#app');
									component.populateSettingProgram();

						}

						requestGet.onerror = function(e){

						}
			}
			request.onerror = function(e){

			}


		}

		myNotification(){
				let html= `
							<nav>
									<div class="nav-wrapper">
										<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Reminders</span></a>
										<a href="#" data-activates="settings-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
										<a onclick="component.studentDashboard()" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

										<ul class="side-nav" id="settings-Nav">
											<div class="side-header row">
												<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
											</div>

											<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
										</ul>
									</div>
							</nav>
							
							<div class="row center" style="position:relative;top:0;font-size:20px;height:35%;margin-bottom:0;padding-bottom:20px;background-color:#ee6e73;"><div style="position:relative;top:45%;">Events and Reminders</div></div>

							<hr>
							  <ul id="remindersList" class="collection" style="position:relative;top:0;width:90%;margin-right:5%;margin-left:5%;margin-top:14px;border:0;">

							  </ul>

						<!-- MODAL -->
							    <div id="reminderEditOption" class="modal">
								    <div class="modal-content" style="padding:0;height:150px;">
								      <h5>Options</h5>
								      <div class="row">
								     	<a class="col s12" style="color:#000;padding:15px;"><i style="margin-right:7px;font-size:18px;" class="fa fa-edit"></i> Edit this Reminder</a><br>
								     	<a class="col s12" style="color:#000;padding:15px;"><i style="margin-right:10px;font-size:18px;" class="fa fa-trash"></i> Delete this Reminder</a>
								      </div>
								    </div>
								    <!--Modal Footer
									    <div class="row modal-footer" style="margin:0;">
									     	<a href="#!" class="col s6 right-align modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
									      	<a href="#!" class="col s6 right-align modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
									    </div>
									 -->
								  </div>

							  <div class="fixed-action-btn">
								    <a onclick="component.addNotification()" class="btn-floating btn-large red">
								      <i class="fa fa-plus" aria-hidden="true"></i>
								    </a>
							  </div>		

			`;
			this.reRender2(html, '#app');
			component.populateReminder();
		}

		addNotification(){
					let html= `
							<nav>
									<div class="nav-wrapper">
										<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Add a Reminder</span></a>
										<a href="#" data-activates="settings-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
										<a onclick="component.myNotification()" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-reply" aria-hidden="true"></i></a>

										<ul class="side-nav" id="settings-Nav">
											<div class="side-header row">
												<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
											</div>

											<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
										</ul>
									</div>
							</nav>

							<div class="row" style="margin-top:40px;">
								<div class="col s4" style="padding:6px 0 6px 0;text-align:center;">Course</div>
								<div class="col s8">
									<a href="#modal20" style="width:88%;" id="catchCourseIDC" class="waves-effect waves-light btn modal-trigger">Tap to choose course</a>
								</div>
							</div>

							<div class="row">
								<div class="col s4" style="padding:6px 0 6px 0;text-align:center;">Type</div>
								<div class="center-align col s8" style="width:53%;font-size:14px;font-weight:300;background-color:#e57373;border-radius:2px;height:45px;margin-left:3%;">
								    <select id="reminderType" style="color:#fff;" required>
									      <option value="" disabled selected>Choose Reminder Type</option>
									      <option value="1">Quiz</option>
									      <option value="2">Exam</option>
									      <option value="3">Activity</option>
									      <option value="4">Meeting</option>
									      <option value="5">Event</option>
								    </select>
								</div>


							</div>

							<div class="row">
								<div class="col s4" style="text-align:center;padding-top:10px;">Date:</div>
								<div clas="col s8">
									<input class="datepicker" style="background-color:#fff;width:53%;margin-left:10px;" id="reminderDate" type="text">
								</div>
							</div>


							<div class="row" style="margin-bottom:0;">
								<div class="col s4" style="text-align:center;padding-top:10px;">Time:</div>
								<div clas="col s8">
									<input class="timepicker" style="background-color:#fff;width:53%;margin-left:10px;" id="reminderTime" type="text">
								</div>
							</div>
							
							<div class="row" style="margin-bottom:0;">
								<div class="col s12" style="text-align:center;margin-bottom:15px;">Short Description</div>
								<textarea id="shortDesc" class="materialize-textarea col s12" style="background-color:#fff;width:80%;margin-right:10%;margin-left:10%;min-height:100px;padding:10px;"></textarea>

							</div>

					<!--Choose Course Modal Popup -->
							<div style="padding:0px;" id="modal20" class="modal modal-fixed-footer">
								<div class="row navbar-fixed" style="position:fixed;text-align:center;background-color:#fafafa;width:100%;padding-top:20px;height:80px;">
									<span style="font-size:26px;">Choose Course</span>
									<br><br>
									<hr>
								</div>

								<div id="modal20Content" class="modal-content" style="margin-top:50px;">


								</div>

								<div class="row modal-footer center-align" style="margin-bottom:0;">
									<a href="#!" onclick="component.transCourseReminder()" style="color:#000" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Confirm</a>
									<a href="#!" class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
								</div> 

							</div>

						<div class="row">

							<div class="col s6 center-align" style="margin-top:30px;color:#757575;padding-top:8px;">
							</div>

							<div class="col s6 center-align" style="margin-top:30px;">
								<button onclick="component.addReminder()" class="waves-effect waves-light btn">Save</button>
							</div>

						</div>	
					
			`;
			this.reRender2(html, '#app');	
			component.listAcCourse();
		}

		reminderEachPage(aLink){
			let html=``;
			let y=aLink.id;
			let requestOpen = indexedDB.open('opcoursedata', 1);
				requestOpen.onsuccess = function(e){
					// console.log('Gate Open!');
					let db = e.target.result;

					var objectStore = db.transaction(['courseReminders'], "readwrite").objectStore('courseReminders');
					let requestGet = objectStore.get(1);
					requestGet.onsuccess = function(e){
						let data = event.target.result;

						html+=`
							<nav>
								<div class="nav-wrapper">
									<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Reminder</span></a>
									<a href="#" data-activates="settings-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
									<a onclick="component.myNotification()" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-reply" aria-hidden="true"></i></a>

									<ul class="side-nav" id="settings-Nav">
										<div class="side-header row">
											<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
										</div>

										<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Overview</a></li>
										<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>View Programs</a></li>
										<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');""><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
										<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Guide</a></li>
										<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>Settings</a></li>
										<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
									</ul>
								</div>
							</nav>
								<div style="border-radius:0 0 5px 5px;">
										<div class="row" style="margin-top:25px;">
											<div class="col s4" style="padding:6px 0 6px 0;text-align:center;">Type</div>
											<div class="col s8" style="padding:6px 0 6px 0;">
												${data[y].reminderType}
												
											</div>
										</div>

										<div class="row">
											<div class="col s4" style="padding:6px 0 6px 0;text-align:center;">Course</div>
											<div class="col s8" style="padding:6px 0 6px 0;">
												${data[y].courseIDC}
											</div>

										</div>
										<div class="row">
											<div class="col s4" style="text-align:center;padding-top:10px;">Date:</div>
											<div clas="col s8" style="padding:11px 0 6px 0;">
											${data[y].reminderDate}
											</div>
										</div>


										<div class="row" style="margin-bottom:0;">
											<div class="col s4" style="text-align:center;padding-top:10px;">Time:</div>
											<div clas="col s8" style="padding:11px 0 6px 0;">
											${data[y].reminderTime}
											</div>
										</div>
										
										<div class="row">
											<div class="col s12" style="margin-bottom:15px;margin-top:30px;text-align:center;">Short Description</div>
											<div class="col s12" style="padding:6px 0 6px 0;min-height:150px;width:80%;margin:0 10% 0 10%;background-color:#fff;">
												${data[y].reminderDesc}
											</div>
										</div>
								</div>

							<!-- Delete Confirmation Modal Structure -->
								<div style="padding:0px;" id="deleteReminderConfirm" class="modal">
									<div class="modal-content">
											<span style="font-size:26px;">Confirm Delete</span>
											<p>Are you sure you want to delete this reminder?</p>
									</div>
									<div class="row modal-footer center-align">
											<a href="#!" class="col s4 modal-action modal-close waves-effect waves-green btn-flat" id="${y}" onclick="component.deleteReminder(${y})" style="color:#000" >Yes</a>
											<a href="#!"  class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
									</div>
								</div>

							<!-- Modal Trigger -->
							<div class="row">
								<div class="col s6" style="text-align:center;">
									<a style="color:#000;" href="#" class=""><i style="font-size:20px;" class="fa fa-edit" aria-hidden="true"></i></a>
									<p style="font-size:12px;;">Update</p>
								</div>
								<div class="col s6" style="text-align:center;">
									<a style="color:#000;" href="#deleteReminderConfirm" class="modal-trigger modal-action modal-close"><i style="font-size:20px;" class="fa fa-trash" aria-hidden="true"></i></a>
									<p style="font-size:12px;color:red;">Delete</p>
								</div>
							</div>




							<!-- Options Modal Structure -->
								<div id="modal1" style="padding-top:15px;padding-bottom:15px;z-index:1004;" class="modal bottom-sheet">
									<div style="padding:0;" class="modal-content">
										<div class="row">
											<span style="font-size:15px;" class="col s9">Options:</span>
										</div>
									</div>

									<div class="row" style="margin-top:15px;margin-bottom:10px;">
										<div class="col s4 center-align">
											<!-- Modal Trigger -->
											<a style="color:#000;" class="modal-close" onclick="component.courseAddTime(${y});" href="#"><i style="font-size:20px;" class="fa fa-clock-o" aria-hidden="true"></i></a>
											<br>
											<p style="font-size:12px;color:#000;">Schedule</p>

										</div>

										<div class="col s4 center-align">
											<!-- Modal Trigger -->
											<a style="color:#bcbcbc;" class="" href="#!"><i style="font-size:20px;" class="fa fa-archive" aria-hidden="true"></i></a>
											<p style="font-size:12px;color:#bcbcbc;">Grade</p>

										</div>

										<div class="col s4 center-align">
											<!-- Modal Trigger -->
											<a style="color:#000;" href="#!" class="modal-action modal-close"><i style="font-size:20px;" class="fa fa-times" aria-hidden="true"></i></a>
											<p style="font-size:12px;color:red;">Reminder</p>
										</div>
									</div>

						`;
						component.reRender2(html, '#app');	

					}
					requestGet.onerror = function(e){
						console('Cannot read the Setup data!');
					}


				}
				requestOpen.onerror = function(e){


				}


		}//reminderEachPage close brace


		addProgamPage(){

						let html=`
							<nav>
								<div class="nav-wrapper">
									<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Add Program</span></a>
									<a href="#" data-activates="settings-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
									<a onclick="component.chooseViewProgram()" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-reply" aria-hidden="true"></i></a>

									<ul class="side-nav" id="settings-Nav">
										<div class="side-header row">
											<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
										</div>

										<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
										<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
										<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');""><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
										<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
										<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
										<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
									</ul>
								</div>
							</nav>

							<div style="margin-top:30px;">
								<div class="row" style="margin-bottom:0;">
									<div class="col s4" style="text-align:center;padding-top:10px;">Program Name:</div>
									<div clas="col s8">
										<input id="programName" placeholder="Ex: Computer Science"  style="background-color:#fff;width:53%;margin-left:10px;padding-left:13px;" type="text">
									</div>
								</div>


								<div class="row" style="margin-bottom:0;">
									<div class="col s4" style="text-align:center;padding-top:10px;">Program Code:</div>
									<div clas="col s8">
										<input id="programCode" placeholder="Ex: CS or HRM" style="background-color:#fff;width:53%;margin-left:10px;padding-left:13px;" type="text">
									</div>
								</div>

								<div class="row">
									<div class="col s4" style="padding:6px 0 6px 0;text-align:center;">Type</div>
									<div class="center-align col s8" style="width:56%;font-size:14px;font-weight:300;background-color:#e57373;border-radius:2px;height:45px;margin-left:3%;">
									    <select id="reminderType" style="color:#fff;" required>
										      <option value="" disabled selected>Choose Program Duration</option>
										      <option value="1">1</option>
										      <option value="2">2</option>
										      <option value="3">3</option>
										      <option value="4">4</option>
										      <option value="5">5</option>
									    </select>
									</div>


								</div>

								<div class="row" style="margin-bottom:0;">
									<div class="col s4" style="text-align:center;padding-top:10px;">System:</div>
									<div clas="col s8" style="padding-top:10px;">
									      <input name="teachingSystem" value="Semestral" type="radio" id="test1" />
									      <label for="test1">Semestral</label>
									      <input name="teachingSystem" value="Trimestral" type="radio" id="test2" />
									      <label for="test2">Trimestral</label>

										</div>
								</div>								

							</div>

						<div class="row">
								<div class="col s12 center-align" style="margin-top:30px;color:#757575;padding-top:8px;">
									Done?</br>
								</div>

								<div class="col s6 center-align" style="margin-left:50%; margin-top:30px;">
									<button onclick="component.addProgram()" class="waves-effect waves-light btn">Lez go!</button>
								</div>

							</div>	
							
						`;
						component.reRender2(html, '#app');	


		}
		singleProgramPage(progID){
			let html=``;
			let y=progID.id;
			
			let requestOpen = indexedDB.open('opcoursedata', 1);
				requestOpen.onsuccess = function(e){
					// console.log('Gate Open!');
					let db = e.target.result;

					let objectStore = db.transaction(['availablePrograms'], "readonly").objectStore('availablePrograms');
					let requestGet = objectStore.get(1);
					requestGet.onsuccess = function(e){
						let data = event.target.result;

							let objectStore2 = db.transaction(['userInfo'], "readwrite").objectStore('userInfo');
							let requestGetUSER = objectStore2.get(1);
								requestGetUSER.onsuccess = function(e){
									let userData = event.target.result;
									userData.progpreview = data[y].code;
									userData.previewYear = data[y].duration;
									let wordForYear ="";
										if(data[y].duration =="1"){
											wordForYear="year";
										}
										else{
											wordForYear="years";
										}
									let requestUpdate = objectStore2.put(userData, 1);

										requestUpdate.onsuccess = function (e) {
											html+=`
										<div class="row" style="height:37%;margin-bottom:0;">
												<nav>
													<div class="nav-wrapper">
														<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Program</span></a>
														<a href="#" data-activates="settings-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
														<a onclick="component.chooseViewProgram()" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-reply" aria-hidden="true"></i></a>

														<ul class="side-nav" id="settings-Nav">
															<div class="side-header row">
																<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
															</div>

															<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
															<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Program</a></li>
															<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');""><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
															<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
															<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
															<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
														</ul>
													</div>
												</nav>
												<div class="row center" id="programCode" style="position:relative;top:0;height:100%;margin:0;">
													<div style="position:relative;top:10%;">
														<span style="font-size:80px;font-weight:300;">${data[y].code}</span>

														<a style="height:50px;border-radius:50%;margin-left:92%;margin-top:10%;" class="modal-trigger pulse right-align" href="#programOptions"><i style="color:#3f51b5;margin-right:25px;font-size:28px;" class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
		
													</div>
												</div>

										</div>

										<div class="row" style="margin-bottom:0;">
											<div class="col s12" style="background-color:#fff;height:50px;text-align:center;padding-top:12px;padding-bottom:12px;">Program Details</div>
										</div>

										<div class="row" style="margin-bottom:0;background-color:#f1989c;min-height:63%;">
												<div class="row" style="margin-bottom:0;">
													<div class="col s4" style="background-color:#ee6e73;height:65px;padding:19px 15px 19px 35px;">Name</div>
													<div id="programName" class="col s8" style="height:65px;padding:19px 15px 19px 35px;background-color:#b2dfdb;">${data[y].name}</div>
												</div>
													<hr>
												<div class="row" style="margin-bottom:0;">
													<div class="col s4" style="background-color:#ee6e73;height:65px;padding:19px 15px 19px 35px">System</div>
													<div id="programType" class="col s8" style="height:65px;padding:19px 15px 19px 35px;background-color:#b2dfdb;">${data[y].type}</div>
												</div>
													<hr>
												<div class="row" style="margin-bottom:0;">
													<div class="col s4" style="background-color:#ee6e73;height:65px;padding:19px 15px 19px 35px">Duration</div>
													<div id="programDuration" class="col s8" style="height:65px;padding:19px 15px 19px 35px;background-color:#b2dfdb;">${data[y].duration} ${wordForYear}</div>
												</div>
													<hr>
												<div class="row" style="margin-bottom:0;">
													<div class="col s4" style="background-color:#ee6e73;height:65px;padding:19px 15px 19px 35px">Terms/year</div>
													<div id="programTerms" class="col s8" style="height:65px;padding:19px 15px 19px 35px;background-color:#b2dfdb;">${data[y].terms}</div>
													
												</div>
													<hr>
												<div class="row" style="margin-bottom:0;">
													<div class="col s4" style="background-color:#ee6e73;height:65px;padding:19px 15px 19px 35px">Added By</div>
													<div id="programAdded" class="col s8" style="height:65px;padding:19px 15px 19px 35px;background-color:#b2dfdb;">${data[y].addedBy}</div>
												</div>
													<hr>
												<div class="row" style="margin-bottom:0;">
													<div class="col s4" style="background-color:#ee6e73;height:65px;padding:12px 15px 12px 35px">Date Added</div>
													<div id="programDate" class="col s8" style="height:65px;padding:19px 15px 19px 35px;background-color:#b2dfdb;">${data[y].date}</div>
												</div>
										</div>


													<!-- Delete Confirmation Modal Structure -->
														<div style="padding:0px;" id="deleteProgramConfirm" class="modal">
															<div class="modal-content">
																<span style="font-size:26px;">Confirm Delete</span>
																<p>Are you sure you want to delete this program?</p>
															</div>
															<div class="row modal-footer center-align">
																<a href="#!" class="col s4 modal-action modal-close waves-effect waves-green btn-flat" id="${y}" onclick="component.deleteProgram(${y})" style="color:#000" >Yes</a>
																<a href="#!"  class="col s4 modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
															</div>
														</div>

													  <!-- Modal Structure -->
													  <div id="programOptions" style="padding-top:15px;padding-bottom:15px;border-radius: 10px 10px 0 0;" class="modal bottom-sheet">
														   <div style="padding:0;" class="modal-content">
																<div class="row">
																	<span style="font-size:18px;" class="col s9">Options:</span>
																</div>
															</div>
															<div class="row" style="margin-top:15px;margin-bottom:10px;">
																<div class="col s6 center-align">
																	<!-- Modal Trigger -->
																	<a style="color:#000;" class="modal-close" href="#!" onclick="component.createCoursePage(${y})"><i style="font-size:20px;" class="fa fa-plus" aria-hidden="true"></i></a>
																	<br>
																	<p style="font-size:12px;color:#000;">Add Courses</p>

																</div>

																<div class="col s6 center-align">
																	<!-- Modal Trigger -->
																	<a style="color:#000;" class="modal-action modal-close" href="#!" onclick="component.viewOtherCourses(${y}),component.displayOtherCourses(${y});"><i style="font-size:20px;" class="fa fa-book" aria-hidden="true"></i></a>
																	<p style="font-size:12px;color:#000;">View Courses</p>
													
																</div>

															</div>

															<hr>

															<div class="row" style="margin-top:15px;margin-bottom:10px;">
																<div class="col s6 center-align">
																	<!-- Modal Trigger -->
																	<a style="color:#000;" class="modal-close" onclick="component.updateProgram(${y});" href="#"><i style="font-size:20px;" class="fa fa-edit" aria-hidden="true"></i></a>
																	<br>
																	<p style="font-size:12px;color:#000;">Edit Details</p>

																</div>

													      		<div class="col s6 center-align">
													      			<!-- Modal Trigger -->
													      			<a style="color:#000;" href="#deleteProgramConfirm" class="modal-trigger modal-action modal-close"><i style="font-size:20px;" class="fa fa-trash" aria-hidden="true"></i></a>
													      			<p style="font-size:12px;color:red;">Delete Course</p>
													      		</div>

															</div>

														</div>

														<div id="saveButton" class="fixed-action-btn" style="display:none;color:background-color:#8bc34a;">
															<a id=${y} onclick="component.saveUpdatedProgram(${y}), component.singleProgramPage(this)" class="btn-floating btn-large" style="background-color:#8bc34a;">
																<i class="fa fa-check" aria-hidden="true"></i>
															</a>
														</div>	
											`;
											component.reRender2(html, '#app');


										}//RequestUpdate

								}//RequestGetUSER

					}
					requestGet.onerror = function(e){
						console('Cannot read the Setup data!');
					}


				}
				requestOpen.onerror = function(e){


				}

		}//singleProgramPage() closing brace

		createCoursePage(y){
			let request = indexedDB.open('opcoursedata', 1);
			let db="";

			request.onsuccess = function(e){
				db = e.target.result;

					let transaction = db.transaction(['availablePrograms'], "readonly");
					let objectStore = transaction.objectStore('availablePrograms');
					let requestGet = objectStore.get(1);

						requestGet.onsuccess = function(e){
							let data = event.target.result;
							let countYear = data[y].duration;
							let countTerm = data[y].terms;
							let selectYears =`<option value="" disabled selected>Choose Course Year</option>`;
							let selectTerms =`<option value="" disabled selected>Choose Course Term</option>`;
							console.log(countYear);
								for(let x=1;x<=countYear;x++){
									let yearRefine = "";
										if(x==1){
											yearRefine="1st Year";
										}
										else if(x==2){
											yearRefine="2nd year";
										}
										else if(x==3){
											yearRefine="3rd year";
										}
										else if(x==4){
											yearRefine="4th year";
										}
										else if(x==5){
											yearRefine="4th year";
										}
										else if(x==6){
											yearRefine="6th year";
										}
										else if(x==7){
											yearRefine="7th year";
										}
										selectYears+= `
											<option value="${x}">${yearRefine}</option>
										`;
									}
								console.log("COURSE ADD READ!");

								for(let b=1;b<=countTerm;b++){
									let termRefine = "";

									if(data[y].type=="Semestral"){
										if(b==1){
											termRefine="1st Semester";
										}
										else if(b==2){
											termRefine="2nd Semester";
										}
									selectTerms+= `
										<option value="${b}">${termRefine}</option>
									`;
									}
									else if (data[y].type=="Trimestral"){
										if(b==1){
											termRefine="1st Trimester";
										}
										else if(b==2){
											termRefine="2nd Trimester";
										}
										else if(b==3){
											termRefine="3rd Trimester";
										}

									selectTerms+= `
										<option value="${b}">${termRefine}</option>
									`;
									}
							}

								let html=`
									<nav>
										<div class="nav-wrapper">
											<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Add Course</span></a>
											<a href="#" data-activates="settings-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
											<a onclick="component.chooseViewProgram()" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-reply" aria-hidden="true"></i></a>

											<ul class="side-nav" id="settings-Nav">
												<div class="side-header row">
													<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
												</div>

												<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
												<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
												<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');""><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
												<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
												<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
												<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
											</ul>
										</div>
									</nav>

									<div style="margin-top:30px;">
										<div class="row" style="margin-bottom:0;">
											<div class="col s4" style="text-align:center;padding-top:10px;">Description:</div>
											<div clas="col s8">
												<input id="newCourseDesc" placeholder="Ex: English 102" style="background-color:#fff;width:53%;margin-left:10px;padding-left:13px;" type="text">
											</div>
										</div>
										<div class="row" style="margin-bottom:0;">
											<div class="col s4" style="text-align:center;padding-top:10px;">Course Code:</div>
											<div clas="col s8">
												<input id="newCourseCode" placeholder="Ex: ENG102" style="background-color:#fff;width:53%;margin-left:10px;padding-left:13px;" type="text">
											</div>
										</div>

										<div class="row">
											<div class="col s4" style="padding:6px 0 6px 0;text-align:center;">Course Year</div>
											<div class="center-align col s8" style="width:56%;font-size:14px;font-weight:300;background-color:#e57373;border-radius:2px;height:45px;margin-left:3%;">
											    <select id="selectCourseYear" style="color:#fff;" required>
												      <option value="" disabled selected>Choose Course Year</option>
											    </select>
											</div>
										</div>
										<div class="row">
											<div class="col s4" style="padding:6px 0 6px 0;text-align:center;">Course Term</div>
											<div class="center-align col s8" style="width:56%;font-size:14px;font-weight:300;background-color:#e57373;border-radius:2px;height:45px;margin-left:3%;">
											    <select id="selectCourseTerm" style="color:#fff;" required>
												      <option value="" disabled selected>Choose Course Term</option>

											    </select>
											</div>
										</div>

										<div class="row" style="margin-bottom:0;">
											<div class="col s4" style="text-align:center;padding-top:10px;">Prerequisite:</div>
											<div clas="col s8">
												<input id="newCoursePre" placeholder="Ex: English 101" style="background-color:#fff;width:53%;margin-left:10px;padding-left:13px;" type="text">
											</div>
										</div>
										<div class="row" style="margin-bottom:0;">
											<div class="col s4" style="text-align:center;padding-top:10px;">Course Units:</div>
											<div clas="col s8">
												<input id="newCourseUnits" placeholder="Ex: 3" style="background-color:#fff;width:53%;margin-left:10px;padding-left:13px;" type="text">
											</div>
										</div>

									</div>

									<div class="fixed-action-btn">
										<a onclick="component.addNewCourse(${y})" class="btn-floating btn-large red">
											<i class="fa fa-plus" aria-hidden="true"></i>
										</a>
									</div>	

								`;
								component.reRender2(html, '#app');
								component.reRender2(selectYears, '#selectCourseYear');
								component.reRender2(selectTerms, '#selectCourseTerm');		
						}

						requestGet.onerror = function(e){

						}
			}
			request.onerror = function(e){

			}

							// {
							// 	"program": "CS IT BA",
							// 	"year":1,
							// 	"sem": 1,
							// 	"area":"Mathematics",
							// 	"idc":"MATH101",
							// 	"des": "College Algebra",
							// 	"prerequisite": "none",
							// 	"unit": 3,
							// 	"stat": "NOT TAKEN",
							// 	"grade":"N/A",
							// 	"linked": false,
							// 	"schedule":{
							// 		"M":"false",
							// 		"T":"false",
							// 		"W":"false",
							// 		"TH":"false",
							// 		"F":"false",
							// 		"S":"false",
							// 		"SU":"false"
							// 	}
							// }

		}

		backupAndRestorePage(){
					let html=`
							<nav>
								<div class="nav-wrapper">
									<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Backup and Restore</span></a>
									<a href="#" data-activates="settings-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
									<a onclick="component.studentDashboard()" class="right" style="margin:-5px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

									<ul class="side-nav" id="settings-Nav">
										<div class="side-header row">
											<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
										</div>

										<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
										<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
										<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');""><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
										<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
										<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
										<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
									</ul>
								</div>
							</nav>

							<div class="row center-align" id="cloudHeader" style="position:relative;top:0;font-size:20px;height:35%;margin:0;background-color:#b3e5fc;">
									<div style="position:relative;top:40%;">Cloud Storage</div>
							</div>
							<hr>
								<div class="container">
									  <ul class="collapsible" data-collapsible="accordion" style="box-shadow:none;border:none;background-color:transparent;margin:0;">
									    <li style="background-color:transparent;border:0;">
									      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-question-circle"></i>What is Backup and Restore?</div>
									      <div style="background-color:none;border:none;" class="collapsible-body">
									      	<div style="margin:0 45px 25px 45px;font-size:13px;">
									      		Here you can save and retrieve data from the cloud server. This will help you transfer or use your data to another mobile device with OPcourse app. This feature requires internet connection.
									      	</div>
									      </div>
									    </li>
									    <li style="background-color:none;border:0;">
									      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-question-circle"></i>How it works</div>
									      <div style="background-color:none;border:none;" class="collapsible-body">
									      	<div style="margin:0 45px 25px 45px;font-size:13px;">
									      		It is simple, just a tap of a button and your data will be sent to the cloud server. Just provide a "Backup Id" that will serve your key to retrieve data on the cloud server. 
									      		<br><br>Make sure the backup ID you provided is easy for you to remember but not easy enough to guess by others. The last backup id you used will be displayed on the User Settings Page.
									      	</div>
									      </div>
									    </li>
									  </ul>
								 </div>
							<hr>

							<div class="container">
								<ul class="collapsible" data-collapsible="accordion" style="box-shadow:none;border:none;background-color:transparent;">
								    <li style="background-color:transparent;border:0;">
								      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-cloud-upload"></i>Backup My Data</div>
								      <div style="background-color:none;border:none;" class="collapsible-body">
											<div style="margin:0 20% 25px 20%;font-size:13px;">
												<input id="backupDataID" style="background-color:#fff;width:100%;font-size:14px;font-weight:300;border-radius:5px;margin-top:18px;margin-bottom:5px;text-align:center;" maxlength="20" type="text" placeholder="Enter a Backup ID" required/>
												<div id="backupResults" style="display:none;color:#000;text-align:center;">

												</div>
												<a class="waves-effect waves-light btn modal-trigger" href="#" onclick="component.checkdataExist()">Backup Data</a>
												<br>


											</div>
								      </div>
								    </li>

								    <li style="background-color:none;border:0;">
								      <div style="background-color:transparent;border:none;" class="collapsible-header"><i class="fa fa-cloud-download"></i>Restore My Data</div>
								      <div style="background-color:none;border:none;" class="collapsible-body">
											<div style="margin:0 20% 25px 20%;font-size:13px;">
												<input id="restoreDataID" style="background-color:#fff;width:100%;font-size:14px;font-weight:300;border-radius:5px;margin-top:18px;margin-bottom:5px;text-align:center;" maxlength="20" type="text" placeholder="Backup ID" required/></input>
												<div id="restoreResults" style="display:none;text-align:center;color:green;">
													
												</div>
													<button style="width:100%;margin-top:25px;" onclick="component.checkdataRestore();" class="waves-effect waves-light btn">Restore Data</button>
												<br>
								      	</div>
								      </div>
								    </li>
								</ul>
							</div>
							<br>
							<br>
						`;
						component.reRender2(html, '#app');

		}
		backupResultPageTrue(data, backupID){
			let backup = "'"+backupID+"'";
			if(data==1){
				let html =`
								<nav>
									<div class="nav-wrapper">
												<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Backup Result</span></a>
												<a href="#" data-activates="home-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
												<a onclick="component.studentDashboard()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

												<ul class="side-nav" id="home-Nav">
													<div class="side-header row">
														<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
													</div>

												<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
												<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
												<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
												<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
												<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
												<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
												</ul>
											</div>
								</nav>

								<div class="row center" style="position:relative;top:0;margin:0;padding-bottom:20px;font-size:20px;height:20%;margin-bottom:0;">
									<div style="position:relative;top:45%;">
										Found Existing Data!
									</div>
								</div>
								<hr>

								<div class="row" style="margin-bottom:0;">
									<div>
											<center style="margin-top:25px;">We found an existing Data on this Backup ID!</center>
										
											<center style="padding-top:20px;padding-left:20px;padding-right:20px;">1. If you do not own this data, please use another backupID to save your data</center>
											<br>
											<center style="padding-top:20px;padding-left:20px;padding-right:20px;">2 . If you are the owner of this data, enter backup password to overwrite data.</center>
											<input id="checkBackupPassword" type="text" style="width:70%;padding-left:15px;margin-left:15%;margin-right:15px;background-color:#fff;margin-top:20px;margin-bottom:0;" class="center-align"></input>
											<br>
									</div>
									<br>
								</div>

									<center><div id="mismatched"></div><center>
									<div class="center-align" style="margin-top:25px;">
										<a href="#" onclick="component.backupAndRestorePage()" class="waves-effect waves-light btn" style="color:#000;">Go Back</a>
										<a href="#" onclick="component.checkBackupPasswordforBackup(${backup})" class="waves-effect waves-light btn" style="color:#000;">Overwrite Data</a>
									</div>
							`;
								component.reRender2(html, '#app');

			}
			else if(data==0){
				let html =`
								<nav>
									<div class="nav-wrapper">
												<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Backup Result</span></a>
												<a href="#" data-activates="home-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
												<a onclick="component.studentDashboard()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

												<ul class="side-nav" id="home-Nav">
													<div class="side-header row">
														<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
													</div>

												<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
												<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
												<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
												<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
												<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
												<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
												</ul>
											</div>
								</nav>

								<div class="row center" style="position:relative;top:0;margin:0;padding-bottom:20px;font-size:20px;height:20%;">
									<div style="position:relative;top:45%;">
										Backup ID Available!
									</div>
								</div>
								<hr>

									<center style="padding-left:30px;padding-right:30px;padding-top:30px;">
										Please tap save data to save your data with ${backupID} as backupID. Please remember your backup password!
									</center>
									<br>
									<div class="row center-align" style="margin-top:50px;">
										<a href="#" onclick="component.backupAndRestorePage()" class="waves-effect waves-light btn" style="color:#000;margin-right:20px;">Go Back</a>
										<a href="#" onclick="component.sendData(${backup})" class="waves-effect waves-light btn" style="color:#000;">Save Data</a>
									</div>
							`;
								component.reRender2(html, '#app');

			}

			
		}
		restoreResultPage(data, restoreID){
			let restore = "'"+restoreID+"'";
			if(data==1){
				let html =`
								<nav>
									<div class="nav-wrapper">
												<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Backup Result</span></a>
												<a href="#" data-activates="home-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
												<a onclick="component.studentDashboard()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

												<ul class="side-nav" id="home-Nav">
													<div class="side-header row">
														<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
													</div>

												<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
												<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
												<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
												<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
												<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
												<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
												</ul>
											</div>
								</nav>
								<div class="row center" style="position:relative;top:0;margin:0;padding-bottom:20px;font-size:20px;height:20%;">
									<div style="position:relative;top:45%;">
										Found your Data!
									</div>

								</div>
								<hr>

								<div class="row" style="margin-top:20px;padding-left:20px;padding-right:20px;">
									<center>1. If you do not own this data, please go back and make sure you are entered the right backup ID.</center>
									<br>
									<center>2. If you are the owner of this data, enter backup password to restore your data on this device.</center>
									<input id="checkRestorePassword" style="margin-top:25px;background-color:#fff;width:70%;margin-left:15%;margin-right:15%;" type="text"></input>
									<br>
									<center><div id="mismatched"></div></center>
								</div>


									<div class="center-align">
										<a href="#" onclick="component.backupAndRestorePage()" class="waves-effect waves-light btn" style="color:#000;margin-right:15px;">Go Back</a>
										<a href="#" onclick="component.checkBackupPasswordforRestore(${restore})" class="waves-effect waves-light btn" style="color:#000;">Restore</a>
									</div>

							`;
								component.reRender2(html, '#app');

			}
			else if(data==0){
				let html =`
								<nav>
									<div class="nav-wrapper">
												<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Backup Result</span></a>
												<a href="#" data-activates="home-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
												<a onclick="component.studentDashboard()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

												<ul class="side-nav" id="home-Nav">
													<div class="side-header row">
														<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
													</div>

												<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
												<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
												<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
												<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
												<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
												<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
												</ul>
											</div>
								</nav>
								<div class="row center" style="position:relative;top:0;margin:0;padding-bottom:20px;font-size:20px;height:20%;">
									<div style="position:relative;top:45%;">
										Not Found!
									</div>

								</div>
									<hr>
									<center style="margin-top:25px;padding-left:25px;padding-right:25px;">Cannot find data with the following backup ID. Please try again.</center>
									<br>
									<div class="center-align" style="margin-top:15px;">
										<a href="#" class="waves-effect waves-light btn" onclick="component.backupAndRestorePage()" style="color:#000;">Go Back</a>
									</div>
							`;
								component.reRender2(html, '#app');
			}


		}
		aboutApp(){

		}

		coursesInProgress(){
			let html =`
							<nav>
								<div class="nav-wrapper">
											<a href="#!" class="brand-logo" style="margin-top:-7px;"><span style="font-size:13px;">Course Check</span></a>
											<a href="#" data-activates="home-Nav" class="button-collapse" style="margin:-7px 20px 0 20px;"><i style="font-size:18px;" class="fa fa-bars" aria-hidden="true"></i></a>
											<a onclick="component.studentDashboard()" class="right" style="margin:-7px 20px 0 0;"><i style="font-size:18px;" class="fa fa-home" aria-hidden="true"></i></a>

											<ul class="side-nav" id="home-Nav">
												<div class="side-header row">
													<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
												</div>

											<li><a href="#" onclick="component.myProfile(), $('.button-collapse').sideNav('hide');"><i class="fa fa-user lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Summary</a></li>
											<li><a onclick="component.chooseViewProgram(), $('.button-collapse').sideNav('hide');"><i class="fa fa-mortar-board lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Programs</a></li>
											<li><a onclick="component.myNotification(), $('.button-collapse').sideNav('hide');"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reminders</a></li>
											<li><a onclick="component.schoolReference(), $('.button-collapse').sideNav('hide');"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>App Guide</a></li>
											<li><a onclick="component.settings(), $('.button-collapse').sideNav('hide');"><i class="fa fa-gear lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i></i>User Settings</a></li>
											<li><a href="mobile.html"><i class="fa fa-info-circle" style="margin:0 8px 0 15px;" aria-hidden="true"></i>About the App</a></li>
											</ul>
										</div>
									</nav>
									<div class="row center" style="position:relative;top:0;margin:0;padding-bottom:20px;font-size:20px;height:40%;background-color:#80cbc4;"><div style="position:relative;top:45%;">Enrolled Courses</div></div>
									<hr>
									<ul id="homeScheduleWeekly" style="border:0;margin:0;" class="collapsible" data-collapsible="accordion">

									</ul>

			`;
									component.reRender2(html, '#app');
									component.listHomeWeekly();
		}

		activateReminders(){
			let html=``;
			let date= new Date();
			let day=date.getDay();
			let hit = 0;
			let courseID ="";

			let courses = [];

				//IndexedDB section
				let request = indexedDB.open('opcoursedata', 1);

					request.onsuccess = function(e){
						let db = e.target.result;

						let	objectStore = db.transaction(["courses2"], "readonly").objectStore("courses2");
							let requestGETCOURSES = objectStore.get(1);

							requestGETCOURSES.onsuccess = function(e){
							let data = event.target.result;
							courses = data;

								let objectStore2 = db.transaction(["userInfo"], "readonly").objectStore("userInfo");
								let requestGETReminders = objectStore.get(1);
									requestGETReminders.onsuccess = function(e){
										let userInfo = event.target.result;
										let notify = userInfo.localNotif;
											for(let x=0;x<courses.length;x++){

												if(courses[x].stat=="INPROGRESS"){	
													
														if(day==1){
																if(courses[x].schedule.M.includes("AM") || courses[x].schedule.M.includes("PM")){
																		hit++;
																	       if(notify == true){
																	       		component.setLocalReminder(x);
																	       }
																	    component.populateCourseReminder(courses[x].idc);

														        	}
														        	else{
														        		continue;
														        	}
												        	
														}
														if(day==2){
																	if(courses[x].schedule.T.includes("AM") || courses[x].schedule.T.includes("PM")){
																		hit++;
																			if(notify == true){
																	       		component.setLocalReminder(x);
																	       }
																	       component.populateCourseReminder(courses[x].idc);
														        	}

														        	else{
														        		continue;
														        	}
												        	
														}
														if(day==3){
																if(courses[x].schedule.W.includes("AM") || courses[x].schedule.W.includes("PM")){
																	hit++;
																	       if(notify == true){
																	       		component.setLocalReminder(x);
																	       }																
																     component.populateCourseReminder(courses[x].idc);
													        	}
													        	else{
													        		continue;
													        	}
												        	
														}
														if(day==4){
																	if(courses[x].schedule.TH.includes("AM") || courses[x].schedule.TH.includes("PM")){
																	hit++;
																	       if(notify == true){
																	       		component.setLocalReminder(x);
																	       }																
																	       component.populateCourseReminder(courses[x].idc); 

														        	}

														        	else{
														        		continue;
														        	}
													
														}
														if(day==5){
															if(courses[x].schedule.F.includes("AM") || courses[x].schedule.F.includes("PM")){
															hit++;
																	     if(notify == true){
																	       		component.setLocalReminder(x);
																	       }														
															       component.populateCourseReminder(courses[x].idc);
												        	}

												        	else{
												        		continue;
												        	}
												        	
														}
														if(day==6){
															if(courses[x].schedule.S.includes("AM") || courses[x].schedule.S.includes("PM")){
															hit++;
																if(notify == true){
																	       		component.setLocalReminder(x);
																}											        		
															       component.populateCourseReminder(courses[x].idc);
												        	}

												        	else{
												        		continue;
												        	}
														}

													 	if(day==0){
												  	      	if (courses[x].schedule.SU.includes("AM") || courses[x].schedule.SU.includes("PM")){
															hit++;
																if(notify == true){
																	       		component.setLocalReminder(x);
																}
															       component.populateCourseReminder(courses[x].idc);

												        	}

												        	else{
												        		continue;
												        	}

														}
												}
											}


										if (hit!==0){

											

											
												}



									}//requestGETReminders.onsuccess closing brace


						}//requestGETCOURSES.onsuccess closing brace
						requestGETCOURSES.onerror = function(e){

						}

				}//requestOpen.onsuccess closing brace


			}

	}

	let component = new Component();
	component.checkSetup();


