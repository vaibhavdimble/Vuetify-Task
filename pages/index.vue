<template>
    <v-app>

        <v-toolbar>
            <v-spacer></v-spacer>

            <v-btn color="blue" variant="outlined" rounded="xl">Login

            </v-btn>
        </v-toolbar>


        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="8" md="6">
                    <div class="mt-10">

                        <v-title class="text-blue-500 text-lg">
                            Setup your company’s inventory management/buying system in 3 steps
                        </v-title>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="hidden-md-and-down">
            <v-row>



                <v-stepper align-sm width="1200" class="mx-auto"
                    :items="['Company Details', 'Add Users', 'Submit for Approval']">






                    <template v-slot:item.1>
                        <v-row>
                            <v-col>


                                <v-card width="1200" elevation="4" height="1100" class="hidden-sm mx-auto md:w-40 md:h-80  "
                                    prepend-icon="mdi-domain">




                                    <template v-slot:title>
                                        <h1 class="text-blue-500">Company Details</h1>


                                    </template>
                                    <v-row>
                                        <v-col>
                                            <v-text class="ml-10 md:ml-1 md:text-lg ">Adding your company’s details
                                                is a
                                                mandatory step in registering your
                                                company</v-text>
                                        </v-col>
                                    </v-row>

                                    <hr class="h-1 border-t-2 mt-4 border-gray-400">

                                    <v-row class="mt-6 hidden-md-and-down">
                                        <v-col class="ml-6">
                                            <v-title>Registered company name<span
                                                    class="text-red-600">*</span></v-title></v-col>
                                        <v-col>
                                            <input class=" px-4 p-2 placeholder-gray-500 border"
                                                placeholder="f5 technologies">
                                        </v-col>
                                        <v-col class="">
                                            <v-title class="ml-28 mt-10">Pan NO<span
                                                    class="text-red-600">*</span></v-title></v-col>
                                        <v-col>
                                            <input type="text" class="bg-white px-4 p-2 mr-14 placeholder-gray-500 border"
                                                placeholder="Enter the company PAN no.">
                                        </v-col>

                                        <v-col class="mr-10">
                                            <v-file-input density="compact" class="text-xs" style="height: 30px;"
                                                label="Choose a file" @change="handleFileChange"></v-file-input>
                                        </v-col>



                                    </v-row>
                                    <v-container>
                                        <v-row class="mt-4">
                                            <v-col class="ml-6">
                                                <v-title class="ml-6">Website URL</v-title>
                                            </v-col>
                                            <v-col>
                                                <input class=" px-4 p-2 placeholder-gray-500 border"
                                                    placeholder="For E.g www.PNG.com">
                                            </v-col>
                                            <v-col>
                                                <v-title class="ml-24">TAN NO.</v-title>
                                            </v-col>
                                            <v-col>
                                                <input type="text"
                                                    class="bg-white px-4 p-2 mr-10 placeholder-gray-500 border"
                                                    placeholder="Enter Company TAN no.">
                                                <div class="text-gray-500 text-xs">TAN.Tax Deduction Account Number
                                                    of the
                                                    company.</div>


                                            </v-col>

                                            <v-col class="mr-10">
                                                <v-file-input density="compact" class="text-xs" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>
                                        </v-row>

                                        <v-row class="mt-4">
                                            <v-col class="ml-6">
                                                <v-title class="ml-6">Your Name<span class="text-red-500">*</span></v-title>
                                            </v-col>
                                            <v-col>
                                                <input class=" px-4 p-2 placeholder-gray-500 border"
                                                    placeholder="Enter your name">
                                            </v-col>
                                            <v-col>
                                                <v-title class="ml-24">CIN No.<span class="text-red-500">*</span></v-title>
                                            </v-col>
                                            <v-col>
                                                <input type="text"
                                                    class="bg-white px-4 p-2 mr-10 placeholder-gray-500 border"
                                                    placeholder="Enter CIN no.">
                                                <!-- <div class="text-gray-500 text-xs">TAN.Tax Deduction Account Number of the company.</div> -->


                                            </v-col>

                                            <v-col class="mr-10">
                                                <v-file-input density="compact" class="text-xs" style="height: 30px;"
                                                    label="Choose a file" @change="handleFileChange"></v-file-input>
                                            </v-col>
                                        </v-row>

                                        <v-row class="mt-8">
                                            <v-col class="ml-6">
                                                <v-title class="ml-6">Your Email id<span
                                                        class="text-red-500">*</span></v-title>
                                            </v-col>
                                            <v-col>
                                                <input class=" px-4 p-2 placeholder-gray-500 border"
                                                    placeholder="Enter your Email ID">
                                                <div class="text-gray-500 text-xs">The above Email ID will be
                                                    treated as
                                                    company's admin ID
                                                    and will
                                                    be used for registration process.</div>
                                            </v-col>
                                            <v-col>
                                                <v-title class="ml-24">GSt No.</v-title>
                                            </v-col>
                                            <v-col>
                                                <input type="text"
                                                    class="bg-white px-4 p-2 mr-10 placeholder-gray-500 border"
                                                    placeholder="Enter the company GST no.">
                                                <!-- <div class="text-gray-500 text-xs">TAN.Tax Deduction Account Number of the company.</div> -->


                                            </v-col>

                                            <v-col class="mr-10">
                                                <v-file-input density="compact" style="height: 30px;" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>
                                        </v-row>

                                        <v-row class="mt-4">
                                            <v-col class="ml-6">
                                                <v-title class="ml-10">Your Mobile No.<span
                                                        class="text-red-500">*</span></v-title>
                                            </v-col>
                                            <v-col class="mr-40">
                                                <input class=" px-4 p-2 placeholder-gray-500 border"
                                                    placeholder="Enter your Mobile No.">
                                                <div class="text-gray-500 text-xs">The above mobile no will be
                                                    treated as
                                                    company's admin ID
                                                    and
                                                    will
                                                    be used for registration process.</div>
                                            </v-col>
                                            <v-col>
                                                <v-title class="ml-6 ">Cancelled Cheque</v-title>
                                                <div class="text-gray-500 text-xs">(only PDF file format is allowed)
                                                </div>
                                            </v-col>


                                            <v-col class="mr-40">
                                                <v-file-input density="compact" style="height: 30px;" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mt-4">
                                            <v-col class="ml-6">
                                                <v-title class="ml-10">Billing Address.</v-title>
                                            </v-col>
                                            <v-col class="mr-40">
                                                <input type="textarea"
                                                    class=" h-20 w-72 px-4 p-2 placeholder-gray-500 border"
                                                    placeholder="Enter the company billing address">
                                                <div class="text-gray-500 text-xs">Will be used for all offline
                                                    communication and billing
                                                    purposes.
                                                </div>
                                            </v-col>
                                            <v-col>
                                                <v-title class="ml-6 ">Company Registration Certificate<span
                                                        class="text-red-500">*</span></v-title>
                                                <div class="text-gray-500 text-xs">(only PDF file format is allowed)
                                                </div>
                                                <v-row>
                                                    <v-col class="mt-10">
                                                        <v-title class="ml-6  ">Management Authorization<span
                                                                class="text-red-500">*</span></v-title>
                                                        <div class="text-gray-500 text-xs">(only PDF file format is
                                                            allowed)
                                                        </div>
                                                    </v-col>
                                                </v-row>

                                            </v-col>


                                            <v-col class="mr-20">
                                                <v-file-input density="compact" style="height: 30px;" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                                <v-file-input density="compact" style="height: 30px;" class="mt-20"
                                                    label="Choose a file" @change="handleFileChange"></v-file-input>
                                            </v-col>


                                        </v-row>




                                    </v-container>

                                    <v-container>


                                    </v-container>

                                </v-card>
                            </v-col>
                        </v-row>

                    </template>

                    <template v-slot:item.2>

                        <v-card width="1200" elevation="4" height="550" class="mx-auto " prepend-icon="mdi-account-plus">



                            <template v-slot:title>
                                <h1 class="text-blue-500">Add Users</h1>


                            </template>
                            <v-text class="ml-10">Define Users as Buyers, Sellers,Billers & Viewers to manage your
                                company
                                account
                                on this website</v-text>

                            <hr class="h-1 border-t-2 mt-4 border-gray-400">
                            <v-container class="mt-48">
                                <v-row justify="center">
                                    <v-icon size="48" icon="mdi-account-multiple-plus-outline"></v-icon>
                                </v-row>
                                <v-row justify="center">
                                    <v-title class="mt-6 text-xl font-bold">No Users Added Yet</v-title>

                                </v-row>
                                <v-row justify="center">
                                    <v-text class="mt-2">Start by adding your first User</v-text>
                                </v-row>
                                <v-row justify="center">
                                    <v-dialog v-model="dialog" persistent width="900">
                                        <template v-slot:activator="{ props }">
                                            <v-btn class="mt-4" color="blue" variant="outlined" v-bind="props">
                                                + Add New User
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-xl text-blue-500">Add User</span>
                                                <span class="text-sm text-gray-600 ml-80">(follwing user data will
                                                    be
                                                    reflected on
                                                    the screen once filled)</span>
                                            </v-card-title>
                                            <!-- <h1>{{ userStore }}</h1> -->
                                            <hr class="h-1 border-t-2 mt-4 border-gray-400">
                                            <v-card-text>
                                                <v-container>

                                                    <v-row>
                                                        <v-col class="">
                                                            <v-title class="">Your Name<span
                                                                    class="text-red-500">*</span></v-title>
                                                        </v-col>
                                                        <v-col>
                                                            <input class=" px-4 p-2 placeholder-gray-500 border"
                                                                placeholder="Enter the user name"
                                                                v-model="username">
                                                        </v-col>
                                                        <v-col>
                                                            <v-title class="ml-6 ">Mobile no.<span
                                                                    class="text-red-500">*</span></v-title>
                                                        </v-col>
                                                        <v-col>
                                                            <input class=" mr-14 px-4 p-2 placeholder-gray-500 border"
                                                                placeholder="Enter the user Mobile No."
                                                                v-model="mobile">
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col class="">
                                                            <v-title class="">Designation<span
                                                                    class="text-red-500">*</span></v-title>
                                                        </v-col>
                                                        <v-col>
                                                            <input class=" px-4 p-2 placeholder-gray-500 border"
                                                                placeholder="Enter the User Designation"
                                                                v-model="role">
                                                        </v-col>
                                                        <v-col>
                                                            <v-title class="ml-6 ">Email ID.<span
                                                                    class="text-red-500">*</span></v-title>
                                                        </v-col>
                                                        <v-col>
                                                            <input class=" mr-14 px-4 p-2 placeholder-gray-500 border"
                                                                placeholder="Enter Users company Email ID"
                                                                v-model="email">
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-container fluid>
                                                            <v-row>
                                                                <v-col class="mt-3" cols="12" sm="4" md="4">
                                                                    <v-title class="ml-20 ">Profile<span
                                                                            class="text-red-500">*</span></v-title>
                                                                    <div class="text-xs text-gray-500">(You may
                                                                        select one
                                                                        or more
                                                                        roles for the same user on the platform)
                                                                    </div>
                                                                </v-col>
                                                                <v-col>
                                                                    <v-checkbox v-model="profile" label="Seller"
                                                                        value="seller"></v-checkbox>

                                                                </v-col>
                                                                <v-col>
                                                                    <v-checkbox v-model="profile" label="Buyer"
                                                                        value="buyer"></v-checkbox>
                                                                </v-col>
                                                                <v-col>
                                                                    <v-checkbox v-model="profile" label="Billing"
                                                                        value="billing"></v-checkbox>
                                                                </v-col>
                                                                <v-col class="mr-24">
                                                                    <v-checkbox v-model="profile" label="Viewer"
                                                                        value="viwer"></v-checkbox>
                                                                </v-col>
                                                            </v-row>

                                                        </v-container>
                                                    </v-row>
                                                </v-container>

                                            </v-card-text>
                                            <v-card-actions>


                                                <v-btn class="ml-96" color="blue-darken-1" variant="plain"
                                                    @click="dialog = false">
                                                    Close
                                                </v-btn>


                                                <v-btn color="blue-darken-1" variant="outlined" @click="saveData" >
                                                    Save
                                                </v-btn>


                                            </v-card-actions>
                                            <small class="ml-72 mb-10">You can view the above users details after
                                                saving the
                                                changes</small>
                                        </v-card>
                                    </v-dialog>
                                </v-row>
                            </v-container>
                        </v-card>


                    </template>

                </v-stepper>
            </v-row>
        </v-container>
        <v-main>
            <v-app class="hidden-lg-and-up ">
                <v-main>
                    <v-container class="mx-auto">


                        <v-stepper width="340" class=" text-xs  " :items="['Company Details', 'Add Users', 'Submit']">



                            <template v-slot:item.1>
                                <v-row>
                                    <v-card width="350" elevation="4" height="1650" class="" prepend-icon="mdi-domain">
                                        <template v-slot:title>
                                            <h5 class="text-blue-500 text-base">Company Details</h5>


                                        </template>
                                        <v-row>
                                            <v-col>
                                                <p class="ml-5 ">Adding your company’s details is a
                                                    mandatory step in registering your
                                                    company</p>
                                            </v-col>
                                        </v-row>
                                        <hr class="h-1 border-t-2 mt-2 border-gray-400">
                                        <v-row class="mt-2">
                                            <v-col class="ml-4">
                                                <v-title class="">Registered company name<span
                                                        class="text-red-600">*</span></v-title></v-col>
                                            <v-col>
                                                <input class=" px-4 w-44 p-2 mr-4 placeholder-gray-500 border"
                                                    placeholder="f5 technologies">
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title class="mt-2">Pan NO<span
                                                        class="text-red-600">*</span></v-title></v-col>
                                            <v-col>
                                                <input type="text"
                                                    class="bg-white w-44 px-4 text-xs p-2 mr-4 placeholder-gray-500 border"
                                                    placeholder="Enter the company PAN no.">
                                            </v-col>



                                        </v-row>
                                        <v-row class="">
                                            <v-col class="ml-4">
                                                <v-title class="mt-2">Upload Pan NO<span
                                                        class="text-red-600">*</span></v-title></v-col>
                                            <v-col class=" mr-4">
                                                <v-file-input class="w-44" density="compact" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>

                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title class="">Website URL</v-title>
                                            </v-col>
                                            <v-col>
                                                <input class=" px-4 w-44 mr-4 p-2 placeholder-gray-500 border"
                                                    placeholder="For E.g www.PNG.com">
                                            </v-col>

                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <v-title class="ml-4">TAN NO.</v-title>
                                            </v-col>
                                            <v-col>
                                                <input type="text"
                                                    class="bg-white px-4  w-44 p-2 mr-4 placeholder-gray-500 border"
                                                    placeholder="Enter Company TAN no.">
                                                <div class="text-gray-500 text-xs mr-4">TAN.Tax Deduction Account Number of
                                                    the
                                                    company.</div>


                                            </v-col>

                                        </v-row>
                                        <v-row class="">
                                            <v-col class="ml-4">
                                                <v-title class="mt-2">Upload TAN NO<span
                                                        class="text-red-600">*</span></v-title></v-col>
                                            <v-col class=" mr-4">
                                                <v-file-input class="w-44 " density="compact" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>

                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title>Your Name<span class="text-red-500">*</span></v-title>
                                            </v-col>
                                            <v-col>
                                                <input class=" px-4 p-2 w-44 mr-4 placeholder-gray-500 border"
                                                    placeholder="Enter your name">
                                            </v-col>
                                        </v-row>
                                        <v-row class="">
                                            <v-col class="ml-4">
                                                <v-title class="">CIN No.<span class="text-red-500">*</span></v-title>
                                            </v-col>
                                            <v-col>
                                                <input type="text"
                                                    class="bg-white px-4 p-2 mr-4 w-44 placeholder-gray-500 border"
                                                    placeholder="Enter CIN no.">
                                                <!-- <div class="text-gray-500 text-xs">TAN.Tax Deduction Account Number of the company.</div> -->


                                            </v-col>

                                        </v-row>
                                        <v-row class="">
                                            <v-col class="ml-4">
                                                <v-title class="mt-2">Upload CIN NO<span
                                                        class="text-red-600">*</span></v-title></v-col>
                                            <v-col class=" mr-4">
                                                <v-file-input class="w-44 " density="compact" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>

                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title>Your Email id<span class="text-red-500">*</span></v-title>
                                            </v-col>
                                            <v-col>
                                                <input class=" px-4 p-2 w-44 mr-4 placeholder-gray-500 border"
                                                    placeholder="Enter your Email ID">
                                                <div class="text-gray-500 text-xs">(The above Email ID will be treated as
                                                    company's admin ID
                                                    and will
                                                    be used for registration process.)</div>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title>GSt No.</v-title>
                                            </v-col>
                                            <v-col>
                                                <input type="text"
                                                    class="bg-white px-4 p-2 mr-4 w-44 placeholder-gray-500 border"
                                                    placeholder="Enter the company GST no.">
                                                <!-- <div class="text-gray-500 text-xs">TAN.Tax Deduction Account Number of the company.</div> -->


                                            </v-col>


                                        </v-row>
                                        <v-row class="">
                                            <v-col class="ml-4">
                                                <v-title class="mt-2">Upload GST NO<span
                                                        class="text-red-600">*</span></v-title></v-col>
                                            <v-col class=" mr-4">
                                                <v-file-input class="w-44 " density="compact" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>

                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title>Your Mobile No.<span class="text-red-500">*</span></v-title>
                                            </v-col>
                                            <v-col>
                                                <input class=" px-4 p-2 w-44 mr-4 placeholder-gray-500 border"
                                                    placeholder="Enter your Mobile No.">
                                                <div class="text-gray-500 text-xs">The above mobile no will be treated as
                                                    company's admin ID
                                                    and
                                                    will
                                                    be used for registration process.</div>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title>Cancelled Cheque</v-title>
                                                <div class="text-gray-500 text-xs">(only PDF file format is allowed)</div>
                                            </v-col>
                                            <v-col class="mr-4">
                                                <v-file-input class=" w-44" density="compact" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>

                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title>Billing Address.</v-title>
                                            </v-col>
                                            <v-col>
                                                <input type="textarea"
                                                    class=" h-14 w-44 px-4 p-2 mr-4 placeholder-gray-500 border"
                                                    placeholder="Enter the company billing address">
                                                <div class="text-gray-500 text-xs">(Will be used for all offline
                                                    communication and billing
                                                    purposes.)
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title class=" ">Company Registration Certificate<span
                                                        class="text-red-500">*</span></v-title>
                                                <div class="text-gray-500 text-xs">(only PDF file format is allowed)</div>
                                            </v-col>
                                            <v-col class="mr-4">
                                                <v-file-input class="w-44" density="compact" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>

                                        </v-row>
                                        <v-row>
                                            <v-col class="ml-4">
                                                <v-title>Management Authorization<span
                                                        class="text-red-500">*</span></v-title>
                                                <div class="text-gray-500 text-xs">(only PDF file format is allowed)
                                                </div>
                                            </v-col>
                                            <v-col class="mr-4">
                                                <v-file-input class="w-44" density="compact" label="Choose a file"
                                                    @change="handleFileChange"></v-file-input>
                                            </v-col>

                                        </v-row>



                                    </v-card>
                                </v-row>




                            </template>
                            <template v-slot:item.2>
                                <v-row>
                                    <v-card width="350" elevation="4" height="400" class="" prepend-icon="mdi-account-plus">
                                        <template v-slot:title>
                                            <h5 class="text-blue-500 text-lg">Add Users</h5>
                                        </template>
                                        <v-row>
                                            <v-col>
                                                <p class="ml-5  ">Define Users as Buyers, Sellers,Billers & Viewers to
                                                    manage
                                                    your company
                                                    account
                                                    on this website</p>
                                            </v-col>
                                        </v-row>
                                        <hr class="h-1 border-t-2 mt-2 border-gray-400">
                                        <v-container class="mt-20">
                                            <v-row justify="center">
                                                <v-icon size="35" icon="mdi-account-multiple-plus-outline"></v-icon>

                                            </v-row>
                                            <v-row justify="center">
                                                <v-title class="mt-6 text-base ">No Users Added Yet</v-title>



                                            </v-row>
                                            <v-row justify="center">
                                                <v-text class="mt-2">Start by adding your first User</v-text>
                                            </v-row>


                                            <v-row justify="center">
                                                <v-dialog v-model="dialog" persistent width="320">
                                                    <template v-slot:activator="{ props }">
                                                        <v-btn class="mt-4" color="blue" variant="outlined" v-bind="props">
                                                            + Add New User
                                                        </v-btn>
                                                    </template>
                                                    <v-card>


                                                        <v-row>
                                                            <v-col class="ml-4 ">
                                                                <span class="text-base text-blue-500 font-bold ">Add
                                                                    User</span>



                                                            </v-col>
                                                            <v-row class="ml-4 mr-4">
                                                                <span class="text-sm mr-4  text-gray-600 ml-1 ">(follwing
                                                                    user data will be
                                                                    reflected on
                                                                    the screen once filled)</span>
                                                            </v-row>
                                                        </v-row>
                                                        <!-- <h1>{{ userStore }}</h1> -->




                                                        <hr class="h-1 border-t-2 mt-10 border-gray-400">


                                                        <v-card-text>
                                                            <v-row>
                                                                <v-col>
                                                                    <v-title class="text-xs font-sans">Your Name<span
                                                                            class="text-red-500">*</span></v-title>
                                                                </v-col>
                                                                <v-col>
                                                                    <input
                                                                        class=" px-4 text-xs p-2  w-40 mr-2 placeholder-gray-500 border"
                                                                        placeholder="Enter the user name"
                                                                        v-model="username">
                                                                </v-col>
                                                            </v-row>
                                                            <v-row>
                                                                <v-col>
                                                                    <v-title class="text-xs font-sans">Mobile no.<span
                                                                            class="text-red-500">*</span></v-title>
                                                                </v-col>
                                                                <v-col>
                                                                    <input
                                                                        class=" mr-1 px-2 p-2 text-xs w-40 placeholder-gray-500 border"
                                                                        placeholder="Enter the user Mobile No."
                                                                        v-model="mobile">
                                                                </v-col>

                                                            </v-row>
                                                            <v-row>
                                                                <v-col class="">
                                                                    <v-title class="text-xs font-sans">Designation<span
                                                                            class="text-red-500">*</span></v-title>
                                                                </v-col>
                                                                <v-col>
                                                                    <input
                                                                        class="mr-1 w-40 px-2 text-xs p-2 placeholder-gray-500 border"
                                                                        placeholder="Enter the User Designation"
                                                                        v-model="role">
                                                                </v-col>
                                                            </v-row>
                                                            <v-row>
                                                                <v-col>
                                                                    <v-title class="text-xs font-sans ">Email ID.<span
                                                                            class="text-red-500">*</span></v-title>
                                                                </v-col>
                                                                <v-col>
                                                                    <input
                                                                        class=" mr-1 px-2 text-xs w-40 p-2 placeholder-gray-500 border"
                                                                        placeholder="Enter Users company Email ID"
                                                                        v-model="email">
                                                                </v-col>
                                                            </v-row>
                                                            <v-row>
                                                                <v-container fluid>
                                                                    <v-row>
                                                                        <v-col cols="12" sm="4" md="4">
                                                                            <v-title class="text-xs font-sans ">Profile<span
                                                                                    class="text-red-500">*</span></v-title>
                                                                            <div class="text-xs text-gray-500">(You may
                                                                                select one
                                                                                or more
                                                                                roles for the same user on the platform)
                                                                            </div>
                                                                        </v-col>
                                                                        <v-col>
                                                                            <v-checkbox v-model="profile"
                                                                                class="-mt-5" label="Seller"
                                                                                value="seller"></v-checkbox>

                                                                        </v-col>
                                                                        <v-col>
                                                                            <v-checkbox v-model="profile"
                                                                                class="-mt-5" label="Buyer"
                                                                                value="buyer"></v-checkbox>
                                                                        </v-col>

                                                                    </v-row>
                                                                    <v-row>
                                                                        <v-col>
                                                                            <v-checkbox v-model="profile"
                                                                                class="-mt-16" label="Billing"
                                                                                value="billing"></v-checkbox>
                                                                        </v-col>
                                                                        <v-col class="">
                                                                            <v-checkbox v-model="profile"
                                                                                class="-mt-16" label="Viewer"
                                                                                value="viwer"></v-checkbox>
                                                                        </v-col>
                                                                    </v-row>

                                                                </v-container>
                                                            </v-row>





                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <!-- <v-spacer></v-spacer> -->


                                                            <v-btn class="ml-20" color="blue-darken-1" variant="plain"
                                                                @click="dialog = false">
                                                                Close
                                                            </v-btn>


                                                            <v-btn color="blue-darken-1" variant="outlined"
                                                                @click="saveData">
                                                                Save
                                                            </v-btn>
                                                        </v-card-actions>
                                                        <small class="ml-10 mb-10">You can view the above users details
                                                            after saving the
                                                            changes</small>


                                                    </v-card>
                                                </v-dialog>
                                            </v-row>


                                        </v-container>


                                    </v-card>
                                </v-row>
                            </template>


                        </v-stepper>



                    </v-container>
                </v-main>
            </v-app>
        </v-main>
        <v-container class="hidden-md-and-down">
            <v-toolbar color="indigo mt-20 ">
                <v-row class="mx-5">


                    <v-col>
                        <v-title>About us</v-title>
                    </v-col>
                    <v-col>
                        <v-title>Privacy Policy</v-title>
                    </v-col>
                    <v-col>
                        <v-title>Terms of use</v-title>
                    </v-col>
                    <v-col>
                        <v-title>Contact us</v-title>
                    </v-col>

                </v-row>

                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>




            </v-toolbar>
        </v-container>
        <v-container class="hidden-lg-and-up">
            <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
                <div>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-1" :icon="icon" variant="text"></v-btn>
                </div>

                <div class="pt-0">
                    Abous us<span class="mx-4">Privacy Policy</span> Contact us
                </div>

                <v-divider></v-divider>


            </v-footer>





        </v-container>
        <v-main>


        </v-main>

    </v-app>
</template>
<script>
// import { useFormStore } from '../store/formStore';

import { useUserStore } from '../store/userStore';



export default {
    data() {
        return {
            currentStep: 0,
            // userStore: {
            //     username: "",
            //     mobile: "",
            //     role: "",
            //     email: "",
            //     profile: [],
            // },
            profile:[],
            userStore: useUserStore(),
            dialog: false,
            drawer: false,
            selectedFile: "",


            icons: [
                'mdi-facebook',

                'mdi-linkedin',
                'mdi-instagram',
                'mdi-youtube'
            ],
            lists: [
                'About us',
                'Privacy Policy',
                'Terms of use',
                'Contact us'
            ]


        }
    },


    methods: {
      
        saveData() {
            
            const userData = {
                username: this.username,
                mobile: this.mobile,
                role: this.role,
                email: this.email,
                profile:this.profile,
                // profile: ['seller', 'buyer', 'billing', 'viewer'].filter(role => this.$data[role]),
            };
            console.log(userData)


            this.userStore.saveUserData(userData);
            this.display()
           
           
            setTimeout(() => {
                this.username="",
                this.mobile="",
                this.role='',
                this.email='',
                this.profile='',
               this.dialog=false;
            }, 100);
        },
        display(){
            console.log('Saved data:', this.userStore.$state);

        },
      





        toggleDrawer() {
            this.drawer = !this.drawer;
        },

        uploadFile() {
            // Handle file upload logic here
            if (this.selectedFile) {
                // Access file details
                console.log('File name:', this.selectedFile.name);
                console.log('File type:', this.selectedFile.type);


            }



        },
        mounted() {
            document.getElementById('fileInput').addEventListener('change', function () {
                const fileNameElement = document.getElementById('fileName');
                fileNameElement.textContent = this.files[0].name;
            });

        },
    },

}



</script>
<style scoped></style>