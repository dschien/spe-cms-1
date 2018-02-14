Vue.component('projects_list_item', {
  props: ['projects','priority', 'list'],
  data: function(){

    return {
      tagColors: [],
      times: 0,
    }
  },
  created: function(){
    this.$parent.$parent.$parent.getTagColors(this.projects,this);
    let self = this;
    $.ajax({
      url: 'http://localhost:8080/project_id',
      method: 'POST',
      data: {
        id: this.projects.id,
        login_token: "whvwbvwxghqw!whvwbvwxghqw"
      },
      error: function (error) {
        console.log(error);
      }
    });
  },
  methods: {
    clickBTN: function(index){
      let self = this;
      this.times += 1;
      this.$delete(this.list, index - 1); //-1 because projects start at 0.
      $.ajax({
        url: 'http://localhost:8080/project_delete',
        method: 'POST',
        data: {
          projectId: index-1,
          login_token: "whvwbvwxghqw!whvwbvwxghqw"
        },
        error: function (error) {
          console.log(error);
        }
      });
      console.log(index);
    },
    isUndefined: function(item){
      return typeof item === "undefined";
    }
  },
  template: `<div class = "project-list-item">
    <img class = "project-list-item-image" alt = "Project Image" v-bind:src="projects.imgUrl" />
    <div class = "project-list-item-content">
    <div class = "tag-container" v-for = "(tag, index) in projects.tags.split(',')">
    <div class = "tag" v-bind:class="tagColors[index]"> {{tag}} </div>
    </div>
    <h1>  {{ projects.title }}  </h1>
    <!-- truncate string -->
    <p> {{ projects.content.substring(0,500) + "..." }} </p>
    <div class = "project-list-item-applicants">
    No. of applicants <span class = "applicants"> {{ projects.applicantsNr }}</span>
    </div>
    <div class = "project-list-item-id">
    Project #{{ projects.id }}
    </div>
    <div style="clear:both"></div>
    <hr />
    <!-- TODO: Discuss in meeting -->
    <div class = "project-list-item-license">
    <img src = "img/mit-license.png" />
    <p>MIT License</p>
    </div>

    <div class = "select-project-btn">
    <button v-on:click="clickBTN(projects.id)">Remove project</button>
    </div>

    <router-link v-bind:to="projects.projectUrl">
    </i><div class = "learn-more-btn">Details</div>
    </router-link>
    </div>
  </div>`
});
