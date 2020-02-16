const repoArray = {
    repo1: {
        name: "Apple AirPods Pro",
        youtube: "https://www.youtube.com/embed/IC9urbiVp4M",
        price: "$ 245.00",
        repoURL: "https://www.apple.com/shop/repo/MWP22AM/A/airpods-pro",
    },
    repo2: {
        name: "Instant Pot Pressure Cooker",
        youtube: "https://www.youtube.com/embed/MB0GAPpTnbc",
        price: "$ 99.99",
        repoURL: "https://store.instantpot.com/repos/duo-nova-7-in-1-6-quart",
    },
    repo3: {
        name: "Eufy Robovac 11",
        youtube: "https://www.youtube.com/embed/5I6eFsa8eOk",
        price: "$ 239.99",
        repoURL: "https://www.eufylife.com/uk/repos/variant/robovac-11s/T2108211",
    },
    repo4: {
        name: "Away Suitcase",
        youtube: "https://www.youtube.com/embed/wnjARlLHJTM",
        price: "$ 295.99",
        repoURL: "https://www.awaytravel.com/suitcases/large/green",
    },
    repo5: {
        name: "Gravity Blanket",
        youtube: "https://www.youtube.com/embed/jZQ_efOqarU",
        price: "$ 60.89",
        repoURL: "https://gravityblankets.com/repos/gravity-blanket?variant=44868533007",
    },
    repo6: {
        name: "Kindle Paperwhite",
        youtube: "https://www.youtube.com/embed/ZjYcXLY7B9I",
        price: "$ 94.99",
        repoURL: "https://www.amazon.com/All-new-Kindle-Paperwhite-Waterproof-Storage/dp/B07CXG6C9W",
    },
    repo7: {
        name: "Staub 5.5 Cocotte",
        youtube: "https://www.youtube.com/embed/ndnyAWAJYW8",
        price: "$ 279.99",
        repoURL: "https://www.zwilling.com/us/staub-cast-iron-5.5-qt-round-cocotte---basil-1102685/40509-358-0.html?cgid=our-brands_staub_cast-iron_coccottes-dutch-ovens#start=1",
    },
    repo8: {
        name: "Fitbit Charge 3",
        youtube: "https://www.youtube.com/embed/omJhc4iv4z4",
        price: "$ 99.99",
        repoURL: "https://www.fitbit.com/us/repos/trackers/charge3?utm_source=&utm_medium=paidsearch&gclid=EAIaIQobChMIm_2wmajB5wIVD5SzCh3bZgUnEAAYASAAEgKXGPD_BwE&gclsrc=aw.ds",
    },
    repo9: {
        name: "Sonos One",
        youtube: "https://www.youtube.com/embed/_YnPnv4XNw4",
        price: "$ 199.99",
        repoURL: "https://www.sonos.com/en-us/shop/one.html",
    },
    repo10: {
        name: "Ancestry DNA",
        youtube: "https://www.youtube.com/embed/kxGT0LJVPSw",
        price: "$ 99.99",
        repoURL: "https://www.ancestry.com/cs/offers/traits",
    },
    repo11: {
        name: "Echo Show",
        youtube: "https://www.youtube.com/embed/MiSCq3vGg1s",
        price: "$ 89.99",
        repoURL: "https://www.amazon.com/Echo-Show-8/dp/B07PF1Y28C",
    },
    repo12: {
        name: "InnoGear",
        youtube: "https://www.youtube.com/embed/DtBfY8kpaBI",
        price: "$ 18.99",
        repoURL: "https://www.innogear.com/collections/diffusers/repos/innogear-3rd-version-150ml-essential-oil-diffuser-with-sleep-mode-whisper-quiet-aromatherapy-diffusers-vaporizer-waterless-auto-shut-off-for-home-office-room",
    },
    repo13: {
        name: "Philips AirFryer",
        youtube: "https://www.youtube.com/embed/RL-S6EnH2X0",
        price: "$ 199.99",
        repoURL: "https://www.usa.philips.com/c-m-ho/cooking/airfryer-xxl",
    }
}

const modal = $("#repoDisplay");

$(".repo").on("click", function(){
    const repo = $(this).attr("data-repo");
    $("#displayName").text(repoArray[repo].name);
    $(".video").attr("src", repoArray[repo].youtube);
    $("#price").text(repoArray[repo].price);
    $("#displayURL").attr("href", repoArray[repo].repoURL).text("Purchase Here")
    modal.addClass('is-active');

})

$(".close-modal").on("click", function () {
    modal.removeClass("is-active");
});