# DNS

Google

	8.8.8.8
	8.8.8.4
	
OpenDNS

	208.67.220.220
	208.67.222.222
	
VeriSign

	64.6.64.6
	64.6.65.6

Level3

	209.244.0.3
	208.244.0.4
	
Advantage DNS

	156.154.70.1
	156.154.71.1
	
Norton ConnectSafe

	199.85.126.10
	199.85.127.10
	
Comodo Secure

	8.26.56.26
	8.20.247.20

Dyn

	216.146.35.35
	216.146.36.36
	
	
## Commandline Tools

Flush DNS cache:

```bash
$ sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder;
```
	