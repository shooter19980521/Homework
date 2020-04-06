var first = 0;
        var second = 0; 
        var point = false;
        var operating_add,operating_Less,operating_Multiply,operating_except,operating_except_one,operating_Class,operating_Square,operating_sin,operating_cos,operating_tan,operating_log,operating_Power,operating_Exponential_function;

        function number(str){
            if(second==null){
                document.getElementById("input_txt").value =``;
                document.getElementById("input_txt").value =`${str}`;
                second = 0;
            }
            else{
                document.getElementById("input_txt").value +=`${str}`;
            }
        }
        function Decimal_point(str){
            
            if(point!=true){
                document.getElementById("input_txt").value +=`${str}`;
                point = true;
            }
        }

        //C
        function refresh(){
            first = 0;
            second = 0;
            point = false;
            document.getElementById("input_txt").value =` `;
        }
        function reback(){
            let txt = document.getElementById("input_txt").value;
            txt =txt.substring(0, txt.length-1);
            document.getElementById("input_txt").value = `${txt}`;
        }

        //+
        function add(){
            if(operating_add!=true)
            {
                operating();
                operating_add = true;
            }
            else{
                first = first+parseFloat(document.getElementById("input_txt").value);
                    second = null;
                    document.getElementById("input_txt").value =`${first}`
                    operating_add == false;
            }
            
            
        }
        //-
        function Less(){
            if(operating_Less!=true){
                operating();
                operating_Less = true;
            }
            else{
                first = first-parseFloat(document.getElementById("input_txt").value);
                second = null;
                document.getElementById("input_txt").value =`${first}`
                operating_add == false;
            }
            
        }
        //*
        function Multiply(){
            if(operating_Multiply!=true){
                operating();
                operating_Multiply = true;
            }
            else{
                first = first*parseFloat(document.getElementById("input_txt").value);
                second = null;
                document.getElementById("input_txt").value =`${first}`
                operating_add == false;
            }
        }
        // /
        function except(){
            if(operating_except!=true){
                operating();
                operating_except = true;
            }
            else{
                first = first/parseFloat(document.getElementById("input_txt").value);
                second = null;
                document.getElementById("input_txt").value =`${first}`
                operating_add == false;
            }
        }
        // 1/x
        function except_one(){
            operating();
            first = 1/first;
            second = null;
            document.getElementById("input_txt").value =`${first}`
            operating_except_one == false;
        }
        //x!
        function Class(){
            operating();
            second = null;
            var Class = 1;
                for(var i = 1 ;i <=first ;i++){
                    Class = Class * i;
                }
                document.getElementById("input_txt").value =`${Class}`
                operating_Class == false;
        }
        //開根號
        function Square(){
            operating();
            second = null;
            let Square = Math.sqrt(first);
            document.getElementById("input_txt").value =`${Square}`
            operating_except_one == false;

        }
        // sin
        function sin(){
            operating();
            second = null;
            let sin = Math.sin(first/180 * Math.PI);
            sin = parseFloat(sin.toFixed(10))
            document.getElementById("input_txt").value =`${sin}`
            operating_sin == false;
        }
        // cos
        function cos(){
            operating();
            second = null;
            let cos = Math.cos(first/180 * Math.PI);
                cos = parseFloat(cos.toFixed(10))
                document.getElementById("input_txt").value =`${cos}`
                operating_cos == false;
        }
        //tan
        function tan(){
            operating();
            second = null;
            let tan = Math.tan(first/180 * Math.PI);
                tan = parseFloat(tan.toFixed(10))
                document.getElementById("input_txt").value =`${tan}`
                operating_tan == false;
        }
        //log
        function log(){
            operating();
            second = null;
            let log = Math.log(first);
                document.getElementById("input_txt").value =`${log}`
                operating_log == false;
        }
        //Power
        function Power(){
            operating();
            second = null;
            operating_Power = true;
        }
        //指數函數
        function Exponential_function(){
            operating();
            second = null;
            let Exponential_function = Math.exp(first);
                document.getElementById("input_txt").value =`${Exponential_function}`
                operating_Exponential_function == false;
        }
        

        //=
        function equal(){
            second = parseFloat(document.getElementById("input_txt").value);
            switch(true){
                case operating_add == true:
                    first = first+second;
                    second = null;
                    document.getElementById("input_txt").value =`${first}`
                    operating_add == false;
                    break;
                case operating_Less == true:
                    first = first-second;
                    second = null;
                    document.getElementById("input_txt").value =`${first}`
                    operating_Less == false;
                    break;
                case operating_Multiply == true:
                    first = first*second;
                    second = null;
                    document.getElementById("input_txt").value =`${first}`
                    operating_Multiply == false;
                    break;
                case operating_except == true:
                    first = first/second;
                    second = null;
                    document.getElementById("input_txt").value =`${first}`
                    operating_except == false;
                    break;
                case operating_Power == true:
                    let Power = Math.pow(first,second);
                    second = null;
                    document.getElementById("input_txt").value =`${Power}`
                    operating_Power == false;
                    break;
                }
                
                
        }


        //設定全部操作皆為false
        function operating_first(){
            point = false;
            operating_add = false;
            operating_Less = false;
            operating_Multiply = false;
            operating_except = false;
            operating_except_one = false;
            operating_Class = false;
            operating_Square=false;
            operating_sin = false;
            operating_cos=false;
            operating_tan = false;
            operating_log = false;
            operating_Power = false;
            operating_Exponential_function= false;
        }

        //個運算的資料儲存
        function operating(){
            if(document.getElementById("input_txt").value!=' '){
                first = parseFloat(document.getElementById("input_txt").value);
                document.getElementById("input_txt").value =` `;
                operating_first();
            }
            else{
                operating_first();
            }
            
        }