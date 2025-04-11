// Third party packages
const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'ejs');
// change views to DIY Home Repair Guides
app.set('views', 'DIY Home Repair Guides');


// Running the server
app.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000');
  });

// Routes for folders
app.use(express.static('DIY Home Repair Guides'));
app.use(express.static('Pictures'));

app.get('/', (req, res)=> {
    res.render('Welcome Page/welcomePage' , { title: 'Welcome' });
});

app.get('/welcome', (req, res) => {
    res.redirect('/');
});

app.get('/home', (req, res)=> {

    const homeRepairCategoriesData = [
        { title: "Plumbing", logo: "/Plumbing_Logo.png", link: "/home/categories?category=plumbing" },
        { title: "Electrical", logo: "/Electrical_logo.jpg", link: "/home/categories?category=electricals" },
        { title: "Carpentry", logo: "/Carpentry_logo.jpg", link: "/home/categories?category=carpentry" },
        { title: "Painting & Finishing", logo: "/Painting_logo.jpg", link: "/home/categories?category=paintingFinishing" },
        { title: "Flooring", logo: "/Flooring_logo.jpg", link: "/home/categories?category=flooring" },
        { title: "Roofing & Gutters", logo: "/Roofing_logo.jpg", link: "/home/categories?category=roofingGutters" },
        { title: "Appliances Repairs", logo: "/Appliances_logo.jpg", link: "/home/categories?category=appliancesRepairs" },
        { title: "Home Safety & Security", logo: "/Safety_logo.jpg", link: "/home/categories?category=homeSafetySecurity" },
        { title: "HVAC (Heating, Ventilation, and Air Conditioning)", logo: "/HVAC_logo.jpg", link: "/home/categories?category=hvac" },
    ];

    res.render('Home Page/homePage', { title: 'Home', homeRepairCategoriesData });
});

const categoryData = {
    plumbing: [
        { title: "Leaky Faucet", image: "/Leaky Faucet Thumbnail.PNG", explanation: "Absolute Solution to Leaky Faucet!", video: 'https://www.youtube.com/embed/8JHpSqu26Nc?si=aa3WI5p7O-apiYmF' },
        { title: "Clogged Drains", image: "/Cloggged Drains Thumbnail.PNG", explanation: "How To Unclog Drain 4 Ways", video: 'https://www.youtube.com/embed/fKMMAp7mKVQ?si=8ejhFgi_mnQzdEJH' },
        { title: "Running Toilets", image: "/Running Toilets.PNG", explanation: "How To Fix A RUNNING Toilet GUARANTEED", video: 'https://www.youtube.com/embed/W6IVEuOoKzg?si=wwFtTNVYdAlPIJnC' },
        { title: "Pipe Leaks & Bursts", image: "/Pipe Leaks & Bursts.PNG", explanation: "How to Repair Copper Pipe Leak without Soldering", video: 'https://www.youtube.com/embed/qstKtmBvhDg?si=rZ2xkMvIQBt8jPpD' },
        { title: "Low Water Pressure", image: "/Low Water Pressure.PNG", explanation: "Fix for low water pressure in kitchen sink or bathroom sink", video: 'https://www.youtube.com/embed/_W7OwVYYflM?si=kGE4LYwtstBJ0xEx' },
        { title: "Water Heater Issues", image: "/Water Heater Issues.PNG", explanation: "Electric water heater not working troubleshooting.", video: 'https://www.youtube.com/embed/5AfvaCJBUek?si=ZH9oOb3MD0ahDV0_' },
        { title: "Garbage Disposal Repair", image: "/Garbage Disposal Repair.PNG", explanation: "3 Sink Disposal Repairs...More Tips + Tricks!", video: 'https://www.youtube.com/embed/xWapKKapv-A?si=_jOflF4_xq9Msn6c' },
        { title: "Installing New Fixtures", image: "/Installing New Fixtures.PNG", explanation: "How to Replace & Install Bathroom Sink Faucets", video: 'https://www.youtube.com/embed/5s4g8yVGPA4?si=ke7k8d9WdZsFreDY' },
        { title: "Sump Pump Maintenance", image: "/Sump Pump Maintenance.PNG", explanation: "Sump Pump Calcium build-up Fix and repair Zoeller Pump", video: 'https://www.youtube.com/embed/jGATz43tkcI?si=6oRcFnOOpAexHbxw' }
    ],
    electricals: [
        { title: "Lighting Fixture", image: "/Lighting Fixture.PNG", explanation: "How to Install a Light Fixture", video: 'https://www.youtube.com/embed/XF4NdfyiDSc?si=6zfClsEg_uAN5u8i' }, 
        { title: "Outlets & Switches", image: "/Outlets & Switches.PNG", explanation: "How To Install An Outlet and Light Switch Combo", video: 'https://www.youtube.com/embed/6U0zCGq6Qxs?si=f5KYaieqS6WyQD9S' },
        { title: "Circuit Breakers", image: "/Circuit Breakers.PNG", explanation: "How to Replace a Circuit Breaker", video: 'https://www.youtube.com/embed/s6OGF66IskI?si=VJOv-FEMaJHygxLN' },
        { title: "Wiring", image: "/Wiring.PNG", explanation: "Fast, Safe Home Wiring Basics for Switches and Outlets", video: 'https://www.youtube.com/embed/ocj_kdHv1_I?si=Ysx6FJ8Z4qOrU6nl' },
        { title: "Ceiling Fans", image: "/Ceiling Fans.PNG", explanation: "Homeowner DIY: Let's Replace A Ceiling Fan!", video: 'https://www.youtube.com/embed/pjb3yHG1MdY?si=mLLaGW-3sIz7dsJ-' },
        { title: "Home Electrical Safety", image: "/Home Electrical Safety.PNG", explanation: "What electrical work are you allowed to do in your own home?", video: 'https://www.youtube.com/embed/C6Ua77yewdY?si=wfoZKQ3SGHqpC2Hm' },
        { title: "Doorbells", image: "/Doorbells.PNG", explanation: "How To Install Ring Doorbell", video: 'https://www.youtube.com/embed/Nf2eid2i9go?si=xibW4uexqPNd0zXm' },
        { title: "Generators", image: "/Generators.PNG", explanation: "Emergency Standby Generator Install", video: 'https://www.youtube.com/embed/MHAiAg_97XI?si=m9aF_3yHVYXLVJvW' },
        { title: "Exhaust Fan", image: "/Exhaust Fan.PNG", explanation: "How to Replace and Install a Bathroom Exhaust Fan", video: 'https://www.youtube.com/embed/Igim_iXOJMQ?si=GvDEAXuoFj3dxxOV' }
    ],
    carpentry: [
        { header: "Carpentry", title: "Doors", image: "/Doors.PNG", explanation: "How To Install An Exterior Door In 10 Minutes!", video: 'https://www.youtube.com/embed/arId492a3EY?si=fc-EievZB91DDIX0' },
        { title: "Windows", image: "/Windows.PNG", explanation: "How to Install a Window | Window Removal & Installation", video: 'https://www.youtube.com/embed/1qAdrxsL0k8?si=RrRJJmvSXFd26Mm-' },
        { title: "Cabinetry", image: "/Cabinetry.PNG", explanation: "How To Install Cabinets By Yourself - IN 6 MINUTES!", video: 'https://www.youtube.com/embed/B2fft07wPI0?si=RWoaFHtCjBlm8IpM' },
        { title: "Furniture Repair Restoration", image: "/Furniture Repair Restoration.PNG", explanation: "Easy Wood Furniture Repair Restoration", video: 'https://www.youtube.com/embed/Xtgc0FleSec?si=PxzsmsO9HVUch6eA' },
        { title: "Woodworking Basics", image: "/Woodworking Basics.PNG", explanation: "15 woodworking basics you should know", video: 'https://www.youtube.com/embed/m3CqH4DjVlI?si=WnigcBOgLg2fS7Al' },
        { title: "Framing", image: "/Framing.PNG", explanation: "How To Frame a Wall - Build a Partition Wall Like a Pro", video: 'https://www.youtube.com/embed/WMb1io9JnJY?si=n1ohEajwBiaOhscr' },
        { title: "Decks", image: "/Deck.PNG", explanation: "How To Build a Deck", video: 'https://www.youtube.com/embed/SUxS4QJpeiU?si=hZimFYrdTnMRA5c2' },
        { title: "Flooring Installation", image: "/Flooring Installation.PNG", explanation: "How to Install Laminate Flooring for beginners", video: 'https://www.youtube.com/embed/lP7B9B7WX1E?si=7YE3dsFWtx7uajmp' },
        { title: "Wood Finishing", image: "/Wood Finishing.PNG", explanation: "This SIMPLE wood finish will save you DAYS of shop time!", video: 'https://www.youtube.com/embed/RQ-FEtA0TKU?si=1ND194G-5gI6FoI_' }
    ],
    paintingFinishing: [
        { header: "Painting & Finishing", title: "Wall & Ceiling Painting", image: "/Wall & Ceiling Painting.PNG", explanation: "How To Paint Walls And Ceilings", video: 'https://www.youtube.com/embed/gMDP4bWQj2w?si=2j_YkNsXQUGCEn9p' },
        { title: "Exterior Painting", image: "/Exterior Painting.PNG", explanation: "How to Paint House Exterior", video: 'https://www.youtube.com/embed/sGGrc62jiiw?si=ihyblMg6tpUvLuqE' },
        { title: "Staining", image: "/Staining.PNG", explanation: "How to Stain Wood", video: 'https://www.youtube.com/embed/s88ljYuOetI?si=ZkknLPnmCMOd7yWL' },
        { title: "Drywall Patching", image: "/Drywall Patching.PNG", explanation: "How to Repair Drywall", video: 'https://www.youtube.com/embed/Fdy9uRvpI-E?si=LCYOOdf-fBJ_ByKR' },
        { title: "Trim & Molding Finishing", image: "/Trim & Molding Finishing.PNG", explanation: "How to Install Baseboards - Step-by-Step for Beginners", video: 'https://www.youtube.com/embed/wfsmfJ_tkuk?si=nyYWYDOa3u5TRrxK' },
        { title: "Furniture Refinishing", image: "/Furniture Refinishing.PNG", explanation: "DIY Mid Century Furniture Refinish", video: 'https://www.youtube.com/embed/SaDirPqvWGc?si=3HmhkEPyacpiWdIH' },
        { title: "Textured", image: "/Textured.PNG", explanation: "How to Texture a Wall (7 options) Do It Yourself", video: 'https://www.youtube.com/embed/mwN0Fw10ZVA?si=aL5RysvtTVq2aiDj' },
        { title: "Waterproofing", image: "/Waterproofing.PNG", explanation: "How to WATERPROOF your Exterior Walls from the Inside", video: 'https://www.youtube.com/embed/lZNvPq6cOQ0?si=t6AzKNRoNTZEWgD0' },
        { title: "Wallpaper Installation", image: "/Wallpaper Installation.PNG", explanation: "HOW TO INSTALL WALLPAPER LIKE A PRO!", video: 'https://www.youtube.com/embed/cV73f4Ywa04?si=sZdnH_ExavHum0BZ' }
    ],
    flooring: [
        { title: "Hardwood Floor Installation", image: "/Hardwood Floor Installation.PNG", explanation: "Learn How to Install Hardwood Floors", video: 'https://www.youtube.com/embed/DGUes4c1rks?si=VQlWFNgmAeiV9_eW' },
        { title: "Laminate Floor Installation", image: "/Laminate Floor Installation.PNG", explanation: "How To Install Laminate Flooring For Beginners DIY", video: 'https://www.youtube.com/embed/tTIlXrRH6VU?si=i8Tccg48YiB9iw5C' },
        { title: "Tile Floor Installation", image: "/Tile Floor Installation.PNG", explanation: "How To Install QuicTile EASY DIY Porcelain Tile", video: 'https://www.youtube.com/embed/2L2GgEsFazw?si=Ceb2R3ZEuiNERpUX' },
        { title: "Vinyl Floor Installation", image: "/Vinyl Floor Installation.PNG", explanation: "How to Install Peel-and-Stick Vinyl Tile Flooring", video: 'https://www.youtube.com/embed/lMiMkotJb3Y?si=YbXjKsasOO3BnEUX' },
        { title: "Carpet Installation", image: "/Carpet Installation.PNG", explanation: "How to Install Carpet", video: 'https://www.youtube.com/embed/clLiPe9oHtw?si=qWjk2y-3nDKNt1Zf' },
        { title: "Concrete Floor", image: "/Concrete Floor.PNG", explanation: "Resurfacing Concrete Floors with a Self-Leveling Skim Coat.", video: 'https://www.youtube.com/embed/r2QEmviW_d0?si=5Czo-dbQWeYpxbPV' },
        { title: "Subfloor Repair", image: "/Subfloor Repair.PNG", explanation: "How to Remove and Replace a Rotten Subfloor", video: 'https://www.youtube.com/embed/Tzi7rftE7Pw?si=W5woy7tA6uGZUxA9' },
        { title: "Grout Renewal", image: "/Grout Renewal.PNG", explanation: "How to Make Your Bath / Shower Surround Grout Look New Again!", video: 'https://www.youtube.com/embed/Nf-zAMUMC1Y?si=PgsBrek2jktoiNOa' },
        { title: "Waterproofing Control", image: "/Waterproofing Control.PNG", explanation: "Surprising Solution to Waterproof Exterior Walls From the Inside", video: 'https://www.youtube.com/embed/D1eg5hg_AzE?si=LYRdGLdsVV9YofQ-' }
    ],
    roofingGutters: [
        { title: "Roof Leak Repair", image: "/Roof Leak Repair.PNG", explanation: "Roof Repairs - Stop and Prevent Leaky Shingles and Vents", video: 'https://www.youtube.com/embed/GfTy6Exo7uE?si=zUvA0AlCur5Hs0hW' },
        { title: "Shingle Replacement", image: "/Shingle Replacement.PNG", explanation: "How To REPLACE DAMAGE SHINGLES The Right Way!", video: 'https://www.youtube.com/embed/EB-D_NwJz2I?si=SF62voLCZlf259ri' },
        { title: "Flat Roof Maintenance", image: "/Flat Roof Maintenance.PNG", explanation: "DIY Flat Roof Repair", video: 'https://www.youtube.com/embed/8oJGjrLummo?si=lI7m5J95A14mpFA_' },
        { title: "Flashing Repair", image: "/Flashing Repair.PNG", explanation: "DIY Liquid Flashing for Roof Leak Repairs", video: 'https://www.youtube.com/embed/0ewNKAKbWfY?si=H2Dft0Zf9o1AOnXB' },
        { title: "Gutter Cleaning", image: "/Gutter Cleaning.PNG", explanation: "How to Clean Gutters | Cleaning Tips", video: 'https://www.youtube.com/embed/IX-pv3cH6Y4?si=2GNEId0uSP3v10OA' },
        { title: "Gutter Installation", image: "/Gutter Installation.PNG", explanation: "HOW TO INSTALL GUTTERS DIY GUIDE", video: 'https://www.youtube.com/embed/COp2Kh0kp2c?si=jQ0ArVbHRBAgAECD' },
        { title: "Roof Insulation", image: "/Roof Insulation.PNG", explanation: "Insulating Attic Ceilings & Cathedral Ceilings", video: 'https://www.youtube.com/embed/gyAMujxceIM?si=zzSeXDcDCVx2syRC' },
        { title: "Storm Damage & Emergency Repairs", image: "/Storm Damage & Emergency Repairs.PNG", explanation: "How To: Tarp a Roof", video: 'https://www.youtube.com/embed/Ox6B5QLpUpc?si=dRGQLdQRG0ZdcEAX' },
        { title: "Moss Removal", image: "/Moss Removal.PNG", explanation: "How to Clean and Get Rid of Roof Moss For GOOD", video: 'https://www.youtube.com/embed/lccbBqCBnIw?si=oEzn0AE1sQHmknZ2' }
    ],
    appliancesRepairs: [
        { title: "Refrigerator & Freezer Repair", image: "/Refrigerator & Freezer Repair.PNG", explanation: "Refrigerator Freezer Not Cooling, but Compressor Is Running", video: 'https://www.youtube.com/embed/Q4RdjSsqw4s?si=JdneXXDYvnxNIs_l' },
        { title: "Washer Repair", image: "/Washer Repair.PNG", explanation: "Washer Not Spinning - How to Troubleshoot and Repair", video: 'https://www.youtube.com/embed/b977m2jXcog?si=2S1gMafWtGUtxXhy' },
        { title: "Gas Oven Repair", image: "/Gas Oven Repair.PNG", explanation: "Gas Oven Won't Heat? Easy DIY Fix", video: 'https://www.youtube.com/embed/c0LMcvqryto?si=-e2YBg11T6goy1qy' },
        { title: "Dishwasher Troubleshooting", image: "/Dishwasher Troubleshooting.PNG", explanation: "How to repair a dishwasher, not draining / cleaning - troubleshoot", video: 'https://www.youtube.com/embed/UF-h0V2LYEU?si=BRA9kOb3rrIVADq1' },
        { title: "Microwave Troubleshooting", image: "/Microwave Troubleshooting.PNG", explanation: "Top Reasons Microwave Is Not Heating — Microwave Oven Troubleshooting", video: 'https://www.youtube.com/embed/PVOJRWceWp0?si=vDkiAYGTsuYa8vaS' },
        { title: "Dryer Troubleshooting", image: "/Dryer Troubleshooting.PNG", explanation: "Dryer Troubleshooting - Top 10 Dryer Problems", video: 'https://www.youtube.com/embed/lAbtibZhqkw?si=77Imned74eXvVrhX' },
        { title: "Electric oven Repair", image: "/Electric oven Repair.PNG", explanation: "How Do Electric Ovens Work? | Repair & Replace", video: 'https://www.youtube.com/embed/tjwaGoKMQ9Q?si=JU8ExNClJymbtAhK' },
        { title: "Air Conditioner Repair", image: "/Air Conditioner Repair.PNG", explanation: "Top 5 AC Problems and How to Fix Them", video: 'https://www.youtube.com/embed/GOXgdnRB840?si=S9kuf1qihcWLvpeS' },
        { title: "Small Appliance Fixes", image: "/Small Appliance Fixes.PNG", explanation: "How to Fix Small Appliances", video: 'https://www.youtube.com/embed/pa9EO7GKt5Q?si=Dwx6Plm3whdZTbLH' }
    ],
    homeSafetySecurity: [
        { title: "Lock Replacement", image: "/Lock Replacement.PNG", explanation: "DIY lock and key replacement - Lost keys or lock not working", video: 'https://www.youtube.com/embed/j_CeVaMTFb8?si=1kzUQIyTsXjSQoLo' },
        { title: "Home Security Systems", image: "/Home Security Systems.PNG", explanation: "DIY Home Security Systems with Smart Technology", video: 'https://www.youtube.com/embed/tK_MUI9N_8w?si=yGHQqzKMMv5WFncU' },
        { title: "Smoke & Carbon Monoxide Detectors", image: "/Smoke & Carbon Monoxide Detectors.PNG", explanation: "How To Install Smoke and Carbon Monoxide Detectors", video: 'https://www.youtube.com/embed/9ExSgQ5oQBs?si=vfxxNEG8-rooivLI' },
        { title: "Window & Door Security", image: "/Window & Door Security.PNG", explanation: "How To Install Sash Jammers | Extra Home Security For UPVC Windows And Doors", video: 'https://www.youtube.com/embed/ssTW9eidxEU?si=MDEqa67QF_wgtfOB' },
        { title: "Outdoor Lighting", image: "/Outdoor Lighting.PNG", explanation: "Outdoor string lights in wooden barrel planters - quick easy DIY tutorial", video: 'https://www.youtube.com/embed/ff5wBXwRLW0?si=x1L7ywuW_HiCLsx4' },
        { title: "Fence Repair", image: "/Fence Repair.PNG", explanation: "Gate Build and Fence Staining", video: 'https://www.youtube.com/embed/wu3WJPWvpnI?si=KUaUV5ViVdh3VwL6' },
        { title: "Childproofing & Baby Safety", image: "/Childproofing & Baby Safety.PNG", explanation: "TOP 5 DIY Ways to Babyproof Your Home!", video: 'https://www.youtube.com/embed/P-2fJNf6alY?si=M8vR_L46pL4NW1yx' },
        { title: "Emergency Preparedness", image: "/Emergency Preparedness.PNG", explanation: "10 Items FEMA Says To Add To Your Emergency Kit | Emergency Preparedness", video: 'https://www.youtube.com/embed/cUq5dT1IAAk?si=CWxQ0_DXzu9IA9OQ' },
        { title: "CCTV Camera Installation", image: "/CCTV Camera Installation.PNG", explanation: "CCTV Camera Installation Out Door How To Install", video: 'https://www.youtube.com/embed/iA4OPM9RN2E?si=Q-_tKV-vTEBMd7jK' }
    ],
    hvac: [
        { title: "Furnace Maintenance & Repair", image: "/Furnace Maintenance & Repair.PNG", explanation: "Furnace Maintenance Guide | Repair and Replace", video: 'https://www.youtube.com/embed/1giPLrObYb4?si=eIghtaKaarIyPox4' },
        { title: "Air Conditioner Troubleshooting", image: "/Air Conditioner Troubleshooting.PNG", explanation: "10 Reasons Why Your AC Is NOT Blowing Cold Air In Your Home! DIY How To FIX!", video: 'https://www.youtube.com/embed/drb2fdVKZlk?si=W6tYu5g_l0VnWXGD' },
        { title: "Thermostat Installation", image: "/Thermostat Installation.PNG", explanation: "How to Install a Smart Thermostat", video: 'https://www.youtube.com/embed/DD113dCPqmg?si=JmpqVbwF0T7Nyg2l' },
        { title: "Air Duct Cleaning & Sealing", image: "/Air Duct Cleaning & Sealing.PNG", explanation: "How to Air Seal Return Air Duct - DIY Duct Sealing | HVAC Duct Sealing DIY", video: 'https://www.youtube.com/embed/gNeOLT9Zg08?si=aPokTSD4VmAMG7oW' },
        { title: "HVAC System Installation", image: "/HVAC System Installation.PNG", explanation: "How to install a Central AC & Heating System step by step", video: 'https://www.youtube.com/embed/wBn84EtALbI?si=BuBkImq2vW9HLhUp' },
        { title: "Ventilation System Repair", image: "/Ventilation System Repair.PNG", explanation: "How To Fix An Air Vent With NO Cold Air Or Heat Coming Out!", video: 'https://www.youtube.com/embed/DorMYDwMSxU?si=V7XkuJwNZdBnIf-U' },
        { title: "Filter Replacement & Maintenance", image: "/Filter Replacement & Maintenance.PNG", explanation: "Air Con Filter maintenance / Ducted / How to DIY", video: 'https://www.youtube.com/embed/Uan1tIXDhm4?si=o8QGdVIRwD_a2Tus' },
        { title: "Dehumidifier & Humidifier Repair", image: "/Dehumidifier & Humidifier Repair.PNG", explanation: "Easy Dehumidifier Fi", video: 'https://www.youtube.com/embed/FhaZJTZJMIg?si=VsxLyelR5E-4VikO' },
        { title: "Energy Efficiency", image: "/Energy Efficiency.PNG", explanation: "5 DIY Ways to Make Your Home More Energy Efficient", video: 'https://www.youtube.com/embed/auv9mTgb8UU?si=gTKqpa5o0e7DQr7I' }
    ],
};

app.get('/home/categories', (req, res)=> {
    const cate = req.query.category;
    const categoryItems = categoryData[cate];
    res.render('Categories Home Page/categories', { title: 'Categories', categoryItems });
});

app.get('/about', (req, res)=> {
    res.render('About Us/aboutUs', { title: 'About Us'});
});

app.get('/contacts', (req, res)=> {
    res.render('Contacts/contacts', { title: 'Contacts' });

});

app.post("/submit-message", async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bernabeelvin@gmail.com",
        pass: "uozf zmot kspc smwn",
      },
    });
  
  
      const info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: ["princessdianamartinezbo22@gmail.com, elvinbernabe34@gmail.com"],
        subject: subject,
        text: message,
      });
  
      console.log("Message sent:", info.messageId);
      res.status(200).json({ success: true, message: "Email sent successfully" });

});
  
  

app.use((req, res)=> {
    res.status(404).render('Error/404page', { title: 'Error' });
});
