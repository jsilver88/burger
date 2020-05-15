$(function () {
    $(".burger-form").on("submit", function (e) {
        e.preventDefault();

        let userBurger = {
            burger_name: $("#newBurger").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: userBurger
        }).then(function () {
            console.log("User's burger added.")
            location.reload();
        })
    });

    $(".devoured").on("click", function (e) {
        console.log(e);

        let id = $(this).data("id");
        let newBurger = {
            devoured: 0
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurger
        }).then(function () {
            console.log("New Burger updated.")
            location.reload();
        })
    })
})
