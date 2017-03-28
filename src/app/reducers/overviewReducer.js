const initialState = {
	data: {
    labels : ["1","2","3","4","5", "6", "7", "8", "9", "10"],
    datasets : [
      {
        label: "Upload",
        backgroundColor : "rgba(249, 245, 6, 0.5)",
        borderColor : "rgba(245, 171, 53,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,90,81,56,45,30,20,3,37]
      },
      {
        label: "Download",
        fillColor : "rgba(6, 10, 249, 0.5)",
        borderColor : "rgba(68,108,179,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [34,56,12,81,2,45,16,32,1,21]
      }
    ]
	},
}

export default function reducer(state = initialState, action) {
	let error;
	switch (action.type) {

		case "":
			break;
		case "":
			break;
		case "":
			break;
	}

	return state;
} 