@app
begin-app

@static

@http
get /
@tables
data
  scopeID *String
  dataID **String
  ttl TTL
