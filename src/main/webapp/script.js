
			  

	
	
/*	$("#btn").click(function(){
		details();
	});*/
	var x;
	function details(){
		var data={};
    	data.name=$("#name").val();
    	data.repo=$("#repo").val(); 
		$.ajax({
		
			url:"https://api.github.com/repos/"+data.name+"/"+data.repo+"/contributors",
			method:"GET"
		}).done(function(data){
			
		 x=data;
	
		 var str = '';
     	str += '<table class="table table-bordered table-striped">';
     	str += '<thead><tr>';
     	str += '<th>Contributors</th>';
    	str += '<th>type</th>';
    	str += '<th>commits</th>';
     	str += '</tr></thead>';
     	
     	str += '<tbody>';
			$.each(data, function(i, obj){
				var uid=obj.login;
   
        		str += '<tr>';
        		str += '<td> <label data-key="userid"><a href=a.html>'+obj.login+'</a></label></td>';
        		str += '<td> <label data-key="type">'+obj.type+'</label></td>';
        		str += '<td> <label data-key="contributions">'+obj.contributions+'</label></td>';
        		str += '</tr>';
        	
        	});
        	str += '</tbody>';
        	str += '</table>';
        	
     
        	$('#commit').html(str);
        	
		}); 
		
	}
	var a;
	function commits(){
		var commit={};
    	commit.name=$("#name").val();
    	commit.repo=$("#repo").val(); 
		$.ajax({
		    url:"https://api.github.com/repos/"+commit.name+"/"+commit.repo+"/commits?sha=master",
			method:"GET"
		}).done(function(commit){
			
		 x=commit;
	
		 var str = '';
     	str += '<table class="table table-bordered table-striped">';
     	str += '<thead><tr>';
     	str += '<th>Committer name</th>';
    	str += '<th>email</th>';
    	str += '<th>date</th>';
    	str += '<th>commit message</th>';
     	str += '</tr></thead>';
     	
     	str += '<tbody>';
			$.each(x, function(i, obj){
				
   
        		str += '<tr>';
        		str += '<td> <label data-key="userid">'+obj.commit.committer.name+'</label></td>';
        		str += '<td> <label data-key="email">'+obj.commit.committer.email+'</label></td>';
        		str += '<td> <label data-key="date">'+obj.commit.committer.date+'</label></td>';
        		str += '<td> <label data-key="message">'+obj.commit.message+'</label></td>';
        		str += '</tr>';
        	
        	});
        	str += '</tbody>';
        	str += '</table>';
        	$('#message').html(str);
			
		}); 
		
	}
	
	
	var b;
	function dates(){
		var data={};
    	data.name=$("#name").val();
    	data.repo=$("#repo").val(); 
    	data.date=$("#date").val();
		$.ajax({
		
			url:"https://api.github.com/repos/"+data.name+"/"+data.repo+"/commits?since="+data.date,
			method:"GET"
		}).done(function(data){
			
		 b=data;
	
		 var str = '';
     	str += '<table class="table table-bordered table-striped">';
     	str += '<thead><tr>';
     	str += '<th>Contributors</th>';
    	str += '<th>email</th>';
    	str += '<th>commits</th>';
     	str += '</tr></thead>';
     	
     	str += '<tbody>';
			$.each(b, function(i, obj){
				
   
        		str += '<tr>';
        		str += '<td> <label data-key="userid"><a href=a.html>'+obj.login+'</a></label></td>';
        		str += '<td> <label data-key="type">'+obj.email+'</label></td>';
        		str += '<td> <label data-key="contributions">'+obj.contributions+'</label></td>';
        		str += '</tr>';
        	
        	});
        	str += '</tbody>';
        	str += '</table>';
        	
     
        	$('#date').html(str);
        	
		}); 
		
	}
