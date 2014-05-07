require 'spec_helper'

describe "Static pages" do

  describe "Home page" do

    it "should have the content 'Sample App'" do
      visit '/static_pages/home'
      expect(page).to have_content('Sample App')
    end

    it "should have the title 'Home'" do
      visit '/static_pages/home'
      expect(page).to have_title("Ruby on Rails Tutorial Sample App | Home")
    end
  end

  describe "Help page" do

    it "should have the content 'Help'" do
      visit '/static_pages/help'
      expect(page).to have_content('Help')
    end

    it "should have the title 'Help'" do
      visit '/static_pages/help'
      expect(page).to have_title("Ruby on Rails Tutorial Sample App | Help")
    end
  end

  describe "Login page" do

    it "should have the content 'Login'" do 
      visit '/static_pages/login'
      expect(page).to have_content('Login')
    end

    it "should have the title 'Login'" do
      visit '/static_pages/login'
      expect(page).to have_title("Ruby on Rails Tutorial Sample App | Login")
    end
  end
end

