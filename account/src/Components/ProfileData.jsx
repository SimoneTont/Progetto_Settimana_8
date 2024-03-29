import React from 'react';
export default function ProfileComp1() {
    return (
        <div class="d-flex flex-column justify-content-center">
            <h1 class="text-secondary">Edit Profile</h1>
            <div class="d-flex border-top pt-3 border-secondary">
                <div class="position-relative">
                    <div>
                        <img src="../assets/avatar.png" alt="UserAvatar" id="AvatarImg"></img>
                        <i class="bi bi-pencil-fill text-white bg-black position-absolute bottom-0 start-0 border border-2 border-light rounded-circle p-1"></i>
                    </div>
                </div>
                <div class="d-flex position-relative">
                    <div class="d-flex flex-column justify-content-between border-bottom border-secondary pb-3">
                        <input class="text-white bg-secondary" type="text" placeholder="Username"></input>
                        <div class="dropdown border border-1 border-white">
                            <button class="dropbtn">Language</button>
                            <div class="dropdown-content">
                            <a href="#">English</a>
                            <a href="#">Français</a>
                            <a href="#">Español</a>
                            <a href="#">Italiano</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-secondary h5">Maturity settings</h3>
                <div class="dropdown border border-1 border-white">
                    <button class="dropbtn">All maturity settings</button>
                    <div class="dropdown-content">
                    <a href="#">Kids</a>
                    <a href="#">Teenagers</a>
                    <a href="#">All maturity settings</a>
                    </div>
                </div>
                <div class="border-bottom pb-3 border-secondary">
                    <p class="text-light">Show titles of <span class="text-light fw-bold">all maturity settings</span> for this profile</p>
                    <button class="border-2 border-secondary bg-black text-secondary px-4">Edit</button>
                </div>
                <div>
                    <h3 class="text-secondary h5">Autoplay controls</h3>
                    <div class="d-flex align-items-center">
                        <input class="m-3" type="checkbox"/>
                        <p class="m-3">Autoplay next episode in a series on all devices</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <input class="m-3" type="checkbox"/>
                        <p class="m-3">Autoplay previews while browsing on all devices</p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-around border-top border-2 border-secondary pt-4">
                <button class="px-4">Save</button>
                <button class="px-4 bg-black text-secondary border-1 border-secondary">Cancel</button>
                <button class="px-4 bg-black text-secondary border-1 border-secondary">Delete Profile</button>
            </div>
        </div>
    )
}