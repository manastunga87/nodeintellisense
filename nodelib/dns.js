﻿var DNS = function(){
    this.lookup = function(domain, family, callback){};
    this.resolve = function(domain, rrtype, callback){};
    this.resolve4 = function(domain, callback){};
    this.resolve6 = function(domain, callback){};
    this.resolveMx = function(domain, callback){};
    this.resolveTxt = function(domain, callback){};
    this.resolveSrv = function(domain, callback){};
    this.resolveNs = function(domain, callback){};
    this.resolveCname = function(domain, callback){};
    this.reverse = function(ip, callback){};
    ////dns.NODATA;
    ////dns.FORMERR;
    ////dns.SERVFAIL;
    ////dns.NOTFOUND;
    ////dns.NOTIMP;
    ////dns.REFUSED;
    ////dns.BADQUERY;
    ////dns.BADNAME;
    ////dns.BADFAMILY;
    ////dns.BADRESP;
    ////dns.CONNREFUSED;
    ////dns.TIMEOUT;
    ////dns.EOF;
    ////dns.FILE;
    ////dns.NOMEM;
    ////dns.DESTRUCTION;
    ////dns.BADSTR;
    ////dns.BADFLAGS;
    ////dns.NONAME;
    ////dns.BADHINTS;
    ////dns.NOTINITIALIZED;
    ////dns.LOADIPHLPAPI;
    ////dns.ADDRGETNETWORKPARAMS;
    ////dns.CANCELLED;
};