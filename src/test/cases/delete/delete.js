describe('Test remove Api', function () {
    it('remove with where', function (done) {
        var count;
        con.runQuery('count from Customers where Country = Sweden').
        then(function (results) {
            count = results
        }).catch(function (err) {
            done(err);
        })

        con.runQuery("remove from Customers where Country = Sweden").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (err) {
            done(err);
        })
    });

    it('remove without ignore case', function (done) {
        var count;
        con.runQuery("count from Customers where Country = meXico").
        then(function (results) {
            count = results;
        }).catch(function (err) {
            done(err);
        })

        con.runQuery("remove from Customers where Country = meXico").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (err) {
            done(err);
        })
    });

    it('remove with ignore case', function (done) {

        var count;
        // con.connection_.select({
        //     from: 'Customers',
        //     where: {
        //         Country: 'meXico'
        //     }
        // }).
        con.runQuery("count from Customers where Country = meXico IGnoreCase").
        then(function (results) {
            count = results;
        }).catch(function (err) {
            done(err);
        })

        // con.connection_.remove({
        //     from: 'Customers',
        //     ignoreCase: true,
        //     where: {
        //         Country: 'meXico'
        //     }
        // }).
        con.runQuery("remove from Customers where Country = meXico IGnoreCase").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (err) {
            done(err);
        })
    });

    it('remove with or', function (done) {

        var count;
        con.runQuery("Count * from Customers where Country=Mexico | City=Madrid").
        then(function (results) {
            count = results;
        }).catch(function (err) {
            done(err);
        })

        con.runQuery("deLete from Customers where Country=Mexico | City=Madrid").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (err) {
            done(err);
        })
    });

    it('remove with in', function (done) {

        var count;
        con.runQuery("count from Customers where Country in ('Germany', 'France', 'UK')").
        then(function (results) {
            count = results;
        }).catch(function (err) {
            done(err);
        })

        con.runQuery("remove from Customers where Country in ('Germany', 'France', 'UK')").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (err) {
            done(err);
        })
    });

    it('remove with operator - != (for string)', function (done) {
        var count;

        con.runQuery("count from Customers where Country != Mexico").
        then(function (results) {
            count = results;
        }).catch(function (err) {
            done(err);
        });

        con.runQuery("remove from Customers where Country != Mexico").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (err) {
            done(err);
        });
    });

    it('remove with operator - != (for number)', function (done) {
        var count;
        con.runQuery("count from Products where Price!=20").
        then(function (results) {
            count = results;
        }).catch(function (err) {
            done(err);
        })

        con.runQuery("remove from Products where Price!=20").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (err) {
            done(err);
        })
    });

    it('remove with operator - >', function (done) {

        var count;
        con.runQuery("count from Products where Price>20").
        then(function (results) {
            count = results;
        }).catch(function (results) {
            done(err);
        })

        con.runQuery("remove from Products where Price>20").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (results) {
            done(err);
        })
    });

    it('remove with operator - >=', function (done) {

        var count;
        con.runQuery("count from Products where Price>=20").
        then(function (results) {
            count = results;
        }).catch(function (results) {
            done(err);
        })

        con.runQuery("remove from Products where Price>=20").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (results) {
            done(err);
        })
    });

    it('remove with operator - <', function (done) {

        var count;
        con.runQuery("count from Products where Price<20").
        then(function (results) {
            count = results;
        }).catch(function (results) {
            done(err);
        })

        con.runQuery("DELETE from Products where Price<20").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (results) {
            done(err);
        })
    });

    it('remove with operator - <=', function (done) {
        var count;
        con.runQuery("count from Products where Price<=20").
        then(function (results) {
            count = results;
        }).catch(function (results) {
            done(err);
        })

        con.runQuery("remove from Products where Price<=20").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (results) {
            done(err);
        })
    });

    it('remove with operator - between', function (done) {
        var count;

        con.runQuery("count from Products where Price betWeen (10,20)").
        then(function (results) {
            count = results;
        }).catch(function (results) {
            done(err);
        })

        con.runQuery("remove from Products where Price betWeen (10,20)").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (results) {
            done(err);
        })
    });

    it('remove with like- "%or%"', function (done) {
        var count;

        con.runQuery("count from Customers where CustomerName like %or% ").
        then(function (results) {
            count = results;
            done();
        }).catch(function (err) {
            done(err);
        })

        con.runQuery("remove from Customers where CustomerName like %or% ").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (err) {
            done(err);
        })
    });

    it('remove with like- "%or"', function (done) {
        var count;
        con.runQuery("count from Customers where CustomerName like %or ").
        then(function (results) {
            count = results;
            con.runQuery("remove from Customers where CustomerName like %or ").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (results) {
                done(err);
            })
        }).catch(function (results) {
            done(err);
        });

    });

    it('remove with like- "or%"', function (done) {
        var count;
        con.runQuery("count from Customers where CustomerName like or% ").
        then(function (results) {
            count = results;
        }).catch(function (results) {
            done(err);
        })

        con.runQuery("remove from Customers where CustomerName like or% ").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(count);
            done();
        }).catch(function (results) {
            done(err);
        })
    });

    it('remove all - using promise', function (done) {
        var Count;
        con.runQuery("count from Customers").
        then(function (results) {
            Count = results;
        }).catch(function (results) {
            done(err);
        });
        con.runQuery("remove from Customers").
        then(function (results) {
            expect(results).to.be.an('number').to.equal(Count);
            done();
        }).
        catch(function (err) {
            done(err);
        });

    });

});