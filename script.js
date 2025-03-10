function insert_Row() {
    //Write your code here
 
  var tr= document.createElement("tr");
  tr.innerHTML= "<td> New Cell1</td> <td>New Cell2</td>";
	document.getElementbyId(sampleTable).appendchild(tr);
	
  
}
