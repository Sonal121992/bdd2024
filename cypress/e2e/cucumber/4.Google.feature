Feature: Google page validation

    Scenario: Google page
        Given Visit to google page
        When See "Google" in title
        Then See "google" in url
