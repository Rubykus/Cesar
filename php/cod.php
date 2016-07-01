<?php
if(isset($_REQUEST['text']))
    {
        // Получаем данные с полей и заносим в переменные
    	$step=$_REQUEST['step'];
    	$itext=$_REQUEST['text'];
        // Создаем массивы символов 
    	$alph = array('a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z');
        $N=count($alph);
        // Создаем пустую строку
    	$otext="";
        // Получаем размер строки
    	$n=strlen($itext);
        // Алгоритм шифрования
    	for($i=0;$i<$n;$i++){
            $k = 0;
    		for($j=0;$j<$N;$j++){
				if($itext[$i]==$alph[$j]){
					$otext= $otext.$alph[($j+$step*2)%$N];
				}
                else{
                    $k++;
                }
    		}
            if ($k == 52){
                $otext= $otext.$itext[$i];
            }
        }
        // Передаем зашифрованый текст клиенту
        echo json_encode($otext);
    }
?>