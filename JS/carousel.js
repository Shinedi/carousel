window.onload=function()
{
	var obox=document.getElementById("box");
	var oul=obox.getElementsByTagName("ul")[0];
	var aimg=obox.getElementsByTagName("img");
	//alert(aimg.length);
	var obtn=document.getElementById("btn");
	var abtn=obtn.getElementsByTagName("input");

    var leftBtn=document.getElementsByClassName('btn01')[0];
    var rightBtn=document.getElementsByClassName('btn02')[0];

	var timer1=null;
	var count=1;
	var m=2;
	var flag=1;
	//��ÿ����ť���һ��onclick�¼���һ�����������
	for(var i=0;i<abtn.length;i++)
	{
		abtn[i].index=i;
		abtn[i].onclick=function()
		{
			//�����ť�����е���ʽ
			for(var j=0;j<abtn.length;j++)
			{
				abtn[j].className='';
			}
			//��������İ�ť�����ʽ
			abtn[this.index].className="active";
			//����������ƶ�,���m��ֵ
			if(flag==-1)
			{
				m=this.index;
			}
			//��count��ֵ
		    count=this.index;
			//���������ƶ���Ӧ����
			sport(oul,'left',-this.index*cssStyle(aimg[0],'width'));
		};
	}
	//���ư�ť
	leftBtn.onclick=function(){
		//��ȡ��ǰͼƬλ�ã����ж��ǵڼ���ͼƬ
		var t=Math.ceil(-cssStyle(oul,'left')/cssStyle(aimg[0],'width'));
		//�ж��Ƿ�Ϊ��һ��ͼƬ
		if(t>0){
		for(var j=0;j<abtn.length;j++)
			{
				abtn[j].className='';
			}
		//����ǰͼƬ��ǰһ��ͼƬ�����ʽ
		abtn[--t].className="active";
		//��ֵ
		if(flag==-1)
		{
			m=t;
		}
		count=t;
		//�ƶ�
		sport(oul,'left',-t*cssStyle(aimg[0],'width'));
		}
	};
	//���ư�ť
	rightBtn.onclick=function(){
		//��ȡ��ǰͼƬλ�ã����ж��ǵڼ���ͼƬ
		var t=Math.ceil(-cssStyle(oul,'left')/cssStyle(aimg[0],'width'));
		//�ж��Ƿ�Ϊ���һ��ͼƬ
		if(t<3){
		for(var j=0;j<abtn.length;j++)
			{
				abtn[j].className='';
			}
		//����ǰͼƬ��ǰһ��ͼƬ�����ʽ
		abtn[++t].className="active";
		//��ֵ
		if(flag==-1)
		{
			m=t;
		}
		count=t;
		//�ƶ�
		sport(oul,'left',-t*cssStyle(aimg[0],'width'));
		}
	};
	//����ul�ĳ���
	cssStyle(oul,'width',cssStyle(aimg[0],'width')*aimg.length);
	//��ʱ��
	timer1=setInterval(function(){
		//�����ƶ�
		if(flag==1 && count<aimg.length)
		{
			for(var i=0;i<abtn.length;i++)
			{
				abtn[i].className='';
			}
			abtn[count].className="active";
			sport(oul,'left',-(count++)*cssStyle(aimg[0],'width'));
			//�ƶ������һ��ͼƬʱ������flagΪ-1
			if(count==4){flag=-1;}
			
		}
		else
		{
		  //�����ƶ�
		  if(flag==-1 && m>=0)
		  {
			  
			  for(var i=0;i<abtn.length;i++)
				{
					abtn[i].className='';
				}
			  
			  abtn[m].className="active";
			  sport(oul,'left',-(m--)*cssStyle(aimg[0],'width'));
			  //����ƶ�����һ��ͼƬʱ������countΪ1��flagΪ1��mΪ2
			  if(m==-1) {
				  count=1;
				  flag=1;
				  m=2;}
		  }	
		}
		},3000);
};