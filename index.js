function activity1() {
    console.log("activity 1")
}

function activity2() {
    console.log("activity 2")
}

function activity3() {
    console.log("activity 3")
}

function parent1(activity3) {
    activity1();
    activity2();
}

function grandParent1() {
    parent1(activity3);
}

grandParent1(() => console.log("This works"))

