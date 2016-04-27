wm.types = {
	"types": {
		"boolean": {
			"primitiveType": "Boolean",
			"internal": true
		},
		"byte": {
			"primitiveType": "Number",
			"internal": true
		},
		"char": {
			"primitiveType": "String",
			"internal": true
		},
		"classicmodelsQ1rtnType": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"comments": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"orderDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.sql.Date",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"orderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"requiredDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.sql.Date",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"shippedDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.sql.Date",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.ArticleTags": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"articleId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"blank": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"tagId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.Customers": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"addressLine1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"addressLine2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"contactFirstName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"contactLastName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"country": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"creditLimit": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"customerName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"employees": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Employees",
					"required": false,
					"fieldOrder": 14,
					"noChange": [],
					"include": []
				},
				"orderses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Orders",
					"required": false,
					"fieldOrder": 13,
					"noChange": [],
					"include": []
				},
				"paymentses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Payments",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"phone": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"postalCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 12,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.Employees": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"customerses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Customers",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"email": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"employeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"employeesByReportsTo": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Employees",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"employeesesForReportsTo": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Employees",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"extension": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"firstName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"jobTitle": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"lastName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"offices": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Offices",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.Offices": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"addressLine1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"addressLine2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"country": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"employeeses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Employees",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"officeCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"phone": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"postalCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"territory": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.Orderdetails": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"orderLineNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"orderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"orders": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Orders",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"priceEach": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"productCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"products": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Products",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"quantityOrdered": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.Orders": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"comments": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"customers": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Customers",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"orderDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"orderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"orderdetailses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Orderdetails",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"requiredDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"shippedDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.Payments": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"amount": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"checkNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"customers": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Customers",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"paymentDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.Productlines": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"htmlDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"image": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"productLine": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"productses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Products",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"textDescriptio": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"textDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.a_b2.classicmodels.Products": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"buyPrice": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"msrp": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"orderdetailses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Orderdetails",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"productCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"productDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"productName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"productScale": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"productVendor": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"productlines": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.a_b2.classicmodels.Productlines",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"quantityInStock": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"double": {
			"primitiveType": "Number",
			"internal": true
		},
		"float": {
			"primitiveType": "Number",
			"internal": true
		},
		"googleapis.DirectionsResponse": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"geocoded_waypoint": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.geocoded_waypointEntryItem",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"route": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.route",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.bounds": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"northeast": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.northeast",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"southwest": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.southwest",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.distance": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"text": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"value": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.duration": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"text": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"value": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.end_location": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.geocoded_waypointEntryItem": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"geocoder_status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"place_id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"type": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.leg": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"distance": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.distance",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"duration": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.duration",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"end_address": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"end_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.end_location",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"start_address": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"start_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.start_location",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"step": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.stepEntryItem",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.northeast": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.overview_polyline": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"points": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.polyline": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"points": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.route": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"bounds": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.bounds",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"copyrights": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"leg": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.leg",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"overview_polyline": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.overview_polyline",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"summary": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.southwest": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.start_location": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.stepEntryItem": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"distance": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.distance",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"duration": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.duration",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"end_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.end_location",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"html_instructions": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"maneuver": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"polyline": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.polyline",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"start_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.start_location",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"travel_mode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				}
			}
		},
		"int": {
			"primitiveType": "Number",
			"internal": true
		},
		"java.lang.Boolean": {
			"primitiveType": "Boolean",
			"internal": false
		},
		"java.lang.Byte": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Character": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.Double": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Float": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Integer": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Long": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Short": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.String": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.StringBuffer": {
			"primitiveType": "String",
			"internal": false
		},
		"java.math.BigDecimal": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.math.BigInteger": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.sql.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Time": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Timestamp": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.util.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"long": {
			"primitiveType": "Number",
			"internal": true
		},
		"org.joda.time.LocalDateTime": {
			"primitiveType": "DateTime",
			"internal": true
		},
		"short": {
			"primitiveType": "Number",
			"internal": true
		}
	}
};