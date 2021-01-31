var btn = $("button");

btn.click(review);





function review(){
  var a  ="1. [SECTION: Title Name] The title name of the opp does NOT tell what they're selling clearly and offer what the benefit to an agent would be"
      
  
  
  
  
  
  
  var b = "[SECTION: Short summary] The short summary DOES NOT tell me who the company is, and what they do. What their product or service is and the solution it provides. Who their ideal clients are and who sales agents would be selling to."
  
  var c = "[SECTION: USP] The company is NOT stating a 3 bullet point Unique Selling Propositions clearly identifiable as something that stands out (or goes above and beyond) from industry standards. (For example NOT explaining how they are a more efficient way of producing or providing something.) Or they are not justifying with a clear benefit why they are good at what they do or each point is clear from another."
  
  
  var d = "[SECTION: Commission details] They have NOT explained their commission details clearly and well."
  
  
  
  
  
  
  var e = "[SECTION: About the opportunity]In their About Opportunity section, they have NOT clearly explained a defined need, problem, or void that isn\'t being filled. An insightful explanation of the company: i.e. who they are and what they do. A clear explanation of the solution, along with the benefits it provides (the latter is contextual)"
  
  
  var f = "[SECTION: Why should self-employed sales professionals consider working with this company] In their, why should sales agent work with them section, there is NO clear pitch made by the company - i.e. the company saying great things about themselves in a justified fashion. A clear indication of earning potential. The company must also highlight some key core values that would strengthen a business relationship: honesty, integrity, customer service etc."
  
  var g = "[SECTION: What kind of self-employed sales professional is best suited to this opportunity] They have not explained any favourable aspects that might come as an advantage to the agent. This could include: - Having a particular level of stakeholder (and above) within an organisation in their network of contacts, or even having contacts at all; - Having experience in communicating with a particular level stakeholder and above; - Generally favourable attributes such as a great attitude, motivated/driven etc. A clear indication of the type of agents might find the sales opportunity interesting."
  
  var responsesArray = [a,b,c,d,e,f,g]
  var screen = $(".infoScreen");
  var checkboxArray = $("input");
  var textareaArray = $("textarea");

  var screenCleared = false; 
for (var i=0;i<checkboxArray.length;i++ ){

if (checkboxArray[i].checked){

}

else{
 if (screenCleared){
  screen.append(responsesArray[i] + "<br><br>");
  screen.append("Extra notes: " +textareaArray[i].value  + "<br><br>");
 }
 else {
   screen.html("")
   screenCleared=true; 
  screen.append(responsesArray[i] + "<br><br>");
  screen.append("Extra notes: " +textareaArray[i].value  + "<br><br>");
 }

}

}
 
screen.append("Copy and paste in a doc and send to Mo along with the who the review was for.") 

}
  
  






