describe('factory: Search', function(){
  var search;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/users?access_params=2ed60b306b500f06913b0a4cac1f6fbef7ef4f9f"+ "q=hello")
        .respond(
            {items: items}
        )
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function(){
    search.query('hello')
    .then(function(response){
      expect(response.data).toEqual(items)
  });
});
