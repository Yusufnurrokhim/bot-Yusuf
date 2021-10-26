const list_aov = (prefix) => {
return `*ZEEONE OFC さ*
			
PROSES	1-60Mnt Max 1X24 Jam		
OPEN	08.00-21.00		
FORMAT	ID		
			
VOUCHER AOV
		
40VC	  Rp 10,000.00		
90VC	  Rp 20,000.00		
130VC   Rp 30,000.00		
180VC   Rp 40,000.00		
230VC   Rp 50,000.00		
470VC   Rp 100,000.00		
950VC	Rp 195,000.00		
1.430VC 	Rp 290,000.00		
2.390VC	 Rp 485,000.00		
4.800VC	 Rp 970,000.00		
24.050VC   Rp 4.845,000.00		
48.200VC   Rp 9.685,000.00		

Untuk pay / pembayan silahkan ketik ${prefix}pay
`
	}

exports.list_aov = list_aov
 