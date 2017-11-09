
			  

	
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
	
	
	var d;
	function dates(){
		var commit={};
    	commit.name=$("#name").val();
    	commit.repo=$("#repo").val(); 
    	commit.date=$("#date").val();
		$.ajax({
		    url:"https://api.github.com/repos/"+commit.name+"/"+commit.repo+"/commits?since="+commit.date,
			method:"GET"
		}).done(function(commit){
			
		 d=commit;
	
		 var str = '';
     	str += '<table class="table table-bordered table-striped">';
     	str += '<thead><tr>';
     	str += '<th>Committer name</th>';
    	str += '<th>email</th>';
    	str += '<th>date</th>';
    	str += '<th>commit message</th>';
     	str += '</tr></thead>';
     	
     	str += '<tbody>';
			$.each(d, function(i, obj){
				
   
        		str += '<tr>';
        		str += '<td> <label data-key="userid">'+obj.commit.committer.name+'</label></td>';
        		str += '<td> <label data-key="email">'+obj.commit.committer.email+'</label></td>';
        		str += '<td> <label data-key="date">'+obj.commit.committer.date+'</label></td>';
        		str += '<td> <label data-key="message">'+obj.commit.message+'</label></td>';
        		str += '</tr>';
        	
        	});
        	str += '</tbody>';
        	str += '</table>';
        	$('#data').html(str);
			
		}); 
		
	}
	var d;
	function languages(){
		var commit={};
    	commit.name=$("#name").val();
    	commit.repo=$("#repo").val();
    	
		$.ajax({
		    url:"https://api.github.com/repos/"+commit.name+"/"+commit.repo+"/languages",
			method:"GET"
		}).done(function(commit){
			
		 d=commit;
	
		 var str = '';
     	str += '<table class="table table-bordered table-striped">';
     	str += '<thead><tr>';
     	str += '<th>Languages</th>';
    
    	
     	str += '</tr></thead>';
     	
     	str += '<tbody>';
			$.each(d, function(i, obj){
				
   
        		str += '<tr>';
        		str += '<td> <label data-key="userid">'+i+'</label></td>';
        	
        		str += '</tr>';
        	
        	});
        	str += '</tbody>';
        	str += '</table>';
        	$('#languages').html(str);
			
		}); 
		
	}
	
		

	var z;
	function branches(){
		var commit={};
    	commit.name=$("#name").val();
    	commit.repo=$("#repo").val(); 
    	
		$.ajax({
		    url:"https://api.github.com/repos/"+commit.name+"/"+commit.repo+"/branches",
			method:"GET"
		}).done(function(commit){
			
		 z=commit;
	
		 var str = '';
     	str += '<table class="table table-bordered table-striped">';
     	str += '<thead><tr>';
     	str += '<th>Branch Name</th>';
    	str += '<th>Commit SHA</th>';
    	str += '<th>Commit URL</th>';
    
     	str += '</tr></thead>';
     	
     	str += '<tbody>';
			$.each(z, function(i, obj){
				
   
        		str += '<tr>';
        		str += '<td> <label data-key="userid">'+obj.name+'</label></td>';
        		str += '<td> <label data-key="email">'+obj.commit.sha+'</label></td>';
        		str += '<td> <label data-key="date">'+obj.commit.url+'</label></td>';
        		
        		str += '</tr>';
        	
        	});
        	str += '</tbody>';
        	str += '</table>';
        	$('#branches').html(str);
			
		}); 
		
	}
	var x;
	
	function graphs(){
		var data={};
    	data.name=$("#name").val();
    	data.repo=$("#repo").val(); 
		$.ajax({
		
			url:"https://api.github.com/repos/"+data.name+"/"+data.repo+"/contributors",
			method:"GET"
		}).done(function(data){
			
		 x=data;
		 $.each(x, function(i, obj){
		var myData = new Array(['+obj.login', '+obj.contributions']);
		var myChart = new JSChart('chartid', 'line');
		myChart.setDataArray(myData);
		myChart.setAxisNameFontSize(10);
		myChart.setAxisNameX('contributor name');
		myChart.setAxisNameY('commits');
		myChart.setAxisNameColor('#787878');
		myChart.setAxisValuesNumberX(6);
		myChart.setAxisValuesNumberY(5);
		myChart.setAxisValuesColor('#38a4d9');
		myChart.setAxisColor('#38a4d9');
		myChart.setLineColor('#C71112');
		myChart.setTitle('A customized chart');
		myChart.setTitleColor('#383838');
		myChart.setGraphExtend(true);
		myChart.setGridColor('#38a4d9');
		myChart.setSize(616, 321);
		myChart.setAxisPaddingLeft(140);
		myChart.setAxisPaddingRight(140);
		myChart.setAxisPaddingTop(60);
		myChart.setAxisPaddingBottom(45);
		myChart.setTextPaddingLeft(105);
		myChart.setTextPaddingBottom(12);
		myChart.setBackgroundImage('path/background.jpg');
		myChart.draw();
		 });
	   	$('#graph').html(str);
		
			}); 

	}
	function pie(){
		var data={};
    	data.name=$("#name").val();
    	data.repo=$("#repo").val(); 
		$.ajax({
		
			url:"https://api.github.com/repos/"+data.name+"/"+data.repo+"/contributors",
			method:"GET"
		}).done(function(data){
			$.each(data, function(i, obj){
		var data = [{
			  values: ['+obj.login'],
			  labels: ['+obj.contributions'],
			  domain: {
			    x: [0, .48]
			  },
			  

			var layout = {
			  title: 'Global Emissions 1990-2011',
			  annotations: [
			    {
			      font: {
			        size: 14
			      },
			      showarrow: false,
			      text: 'GHG',
			      x: 0.17,
			      y: 0.5
			    },
			    {
			      font: {
			        size: 14
			      },
			      showarrow: false,
			      text: 'CO2',
			      x: 0.82,
			      y: 0.5
			    }
			  ]
			};
			});

			Plotly.newPlot('pie', data, layout);
		});
	}
	
		