<template>
<div class="globe-appBar">
    <div class="globe-appBar-top center-flex-display">
        <div :class="getMainOptClass()" :title="SEARCH_ICON_TITLE" @click="globeStore.setMenuOpen(0)">
            <font-awesome-icon icon="fa-magnifying-glass" />
            <span>Search</span>
        </div>
        <div :class="getMainOptClass()" :title="INTERESTS_ICON_TITLE" @click="globeStore.setMenuOpen(3)">
            <font-awesome-icon icon="fa-display" />
            <span>Hobbies</span>
        </div>
        <div :class="getMainOptClass()" :title="WORK_ICON_TITLE" @click="globeStore.setMenuOpen(4)">
            <font-awesome-icon icon="fa-laptop-code" />
            <span>Career</span>
        </div>
    </div>
    <div class="globe-appBar-bottom" style="justify-content: flex-end;">
        <div :class="getMainOptClass()" :title="SETTINGS_ICON_TITLE" @click="globeStore.setMenuOpen(1)">
            <font-awesome-icon icon="fa-gear" />
            <span>Settings</span>
        </div>
        <div :class="getMainOptClass()" @click="globeStore.setMenuOpen(2)" :title="TIME_ICON_TITLE">
            <font-awesome-icon icon="fa-clock" />
            <span>Time</span>
        </div>
        <div v-if="!checkMobileMode()" class="globe-appBar-icon"
            :title="screenStore.elementTitle"
            @click="screenStore.setFullScreen()">
            
            <font-awesome-icon :icon="screenStore.faIcon" />
        </div>
    </div>
</div>
</template>

<script setup>
import { useGlobeStore } from '../store/GlobeStore.js';
import { usePageViewStore, useScreenStore } from '../store/ExtraStores.js';

const globeStore = useGlobeStore();
const pageViewStore = usePageViewStore();
const screenStore = useScreenStore();

/**
 * This returns the classes for the main options of the app bar.
 */
function getMainOptClass() {
    return ['globe-appBar-icon', 'globe-appBar-mainOpt'];
}

/**
 * This returns whether or not the page view is in mobile mode.
 */
function checkMobileMode() {
    return (pageViewStore.pageView == 1);
}

const SEARCH_ICON_TITLE = "Search Locations";
const INTERESTS_ICON_TITLE = "My Hobbies";
const WORK_ICON_TITLE = "My Career";
const SETTINGS_ICON_TITLE = "Settings";
const TIME_ICON_TITLE = "View Time";
</script>

<style scoped>
.globe-appBar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 54px;
    background: linear-gradient(to top, var(--blue-one) 0%, var(--blue-two) 100%);
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid var(--blue-five);
}
.globe-appBar-bottom {
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.globe-appBar-top {
    height: fit-content;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
}

.globe-appBar-icon {
    user-select: none;
    cursor: pointer;
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--blue-five);
    font-size: 24px;
    transition: var(--default-transition);
}
.globe-appBar-icon:hover {
    background-color: var(--blue-three);
    color: black;
}

.globe-appBar-mainOpt {
    height: 55px;
}
.globe-appBar-mainOpt span {
    margin-top: 2px;
    font-size: 11px;
    font-family: 'Lexend', sans-serif;
    font-weight: bold;
}

.globe-appBar-time {
    width: 85px;
    flex-direction: column;
    font-family: 'Lexend', sans-serif;
    font-weight: bold;
    color:var(--blue-five);
    font-size: 14px;
}
.globe-appBar-time span {
    display: block !important;
}
</style>