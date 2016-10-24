# Apache / Webservers

Quick http server:

	python -m SimpleHTTPServer 8000

Quick http server than can handle php:

	php -S 0.0.0.0:8000
	

<a name="#unix_server_problems"></a>
	
### Tools to diagnose problems on a UNIX server:

	w [see how long the server uptime is]
	df -h [check if drives are down or full]
	free [check memory]
	top [and] ps -ef [check if processes are running]
	./etc/init.d/httpd status [check that Apache is running]
	./etc/init.d/postgresql status [check that postgresql is running]
	last [check recent user logins]
	last reboot [check the last time the system rebooted]
	tail /var/log/messages [check system log messages]
	tail /var/log/messages.1 [check system log messages]
	cat /var/log/httpd/error_log [check Apache error log]
	cat /etc/apache-tomcat/logs/catalina.out [check Tomcat error log]